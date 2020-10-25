import Auth from "@aws-amplify/auth";

import { awsmobile } from "@/plugins/amplify";
import { Scalars } from "iwashi_abr_1023/iwashiabr";
Auth.configure(awsmobile.Auth);

class HostUserAuthInteractor {
  public async isSignIn(): Promise<boolean> {
    try {
      await Auth.currentAuthenticatedUser({
        bypassCache: false
      });
      return true;
    } catch (err) {
      return false;
    }
  }
  public async getSignInfo(): Promise<any> {
    return Auth.currentAuthenticatedUser({
      bypassCache: false
    });
  }

  public async signIn(email: string, password: string): Promise<void> {
    await Auth.signIn(email, password);
  }

  public async signOut(): Promise<void> {
    await Auth.signOut();
  }

  public async signUp(email: string, password: string): Promise<void> {
    await Auth.signUp({
      username: email,
      password
    });
  }
  public async signUpResend(email: string): Promise<void> {
    await Auth.resendSignUp(email);
  }

  public async signUpConfirmed(email: string, code: string): Promise<void> {
    await Auth.confirmSignUp(email, code);
  }

  public async resetPassword(
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    const user = await Auth.currentUserInfo();
    await Auth.changePassword(user, oldPassword, newPassword);
  }

  public async forgotPassword(email: string): Promise<void> {
    await Auth.forgotPassword(email);
  }

  public async resetPasswordConfirm(
    email: string,
    code: string,
    newPassword: string
  ): Promise<void> {
    await Auth.forgotPasswordSubmit(email, code, newPassword);
  }

  // public errorHandle(err: Error): ChillnnError | null {
  //     // Auth
  //     switch (err.name) {
  //         // Auth
  //         case 'UserNotFoundException':
  //         case 'NotAuthorizedException':
  //             return new ChillnnError(ErrorCode.chillnn_auth_userNotFound);
  //         case 'UsernameExistsException':
  //             return new ChillnnError(ErrorCode.chillnn_auth_emailIsAlreadyRegistered);
  //         case 'CodeMismatchException':
  //             return new ChillnnError(ErrorCode.chillnn_auth_confirmationCodeIsNotCorrect);
  //         case 'InvalidParameterException':
  //             switch (err.message) {
  //                 case 'Cannot reset password for the user as there is no registered/verified email or phone_number':
  //                     return new ChillnnError(ErrorCode.chillnn_auth_confirmationCodeIsNotCorrect);
  //             }
  //         default:
  //             return new ChillnnError(ErrorCode.chillnn_500_systemError);
  //     }
  // }
}

export const hostUserAuthInteractor = new HostUserAuthInteractor();
