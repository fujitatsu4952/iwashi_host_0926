import Storage from "@aws-amplify/storage";
import { S3Object } from "@/entity/type";
import { awsmobile } from "~/plugins/amplify";

class HostStorageInteractor {
  public getS3ObjectByKey(key: string) {
    return {
      bucket: awsmobile.Storage.AWSS3.bucket,
      key,
      region: awsmobile.Storage.AWSS3.region
    };
  }
  /**
   * @param path パス
   * @param fileName 保存するファイル(名拡張子なし)
   * @param file ファイルオブジェクトの実態
   */
  public async uploadPublicImg(
    path: string,
    fileName: string,
    file: File
  ): Promise<S3Object> {
    const suffix: string = file.name.split(".").pop()!;
    // 画像のupload
    await Storage.put(`${path}/${fileName}.${suffix}`, file, {
      level: "public",
      cacheControl: "public, max-age=86400"
    });
    // s3objectの返信
    return {
      bucket: awsmobile.Storage.AWSS3.bucket,
      key: `public/${path}/${fileName}.${suffix}`,
      region: awsmobile.Storage.AWSS3.region
    };
  }

  public getImageUrl(s3Object: S3Object): string {
    if (!s3Object) {
      return "";
    }
    if (!s3Object.key) {
      return "";
    }
    return `${awsmobile.Storage.AWSS3.baseUrl}${s3Object.key}`;
  }
}

export const hostStorageInteractor = new HostStorageInteractor();
