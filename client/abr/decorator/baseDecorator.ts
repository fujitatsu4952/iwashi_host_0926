// import { Component, Vue } from 'nuxt-property-decorator';
// import { getShortID } from 'chillnn-abr-hotel';
// import { infoStore } from '@/store';
// import { errorHandle } from '~/util/errorHandleUtil';
// import { ChillnnError } from 'chillnn-abr-hotel';

// /**
//  * ABRのinterceptor
//  */
// @Component({})
// class AbrDecorator extends Vue {
//     private promises: Set<string> = new Set([]);

//     public Async() {
//         const res: MethodDecorator = (target: object, name: string | symbol, descriptor: PropertyDescriptor) => {
//             const method = descriptor.value; // もともとのメソッドを退避しておきます。
//             const createRand = this.createRand;
//             const preAsyncDescriptor = this.preAsync;
//             const afterAsyncDescriptor = this.afterAsync;
//             const errorHandler = this.errorHandle;
//             descriptor.value = async function() {
//                 try {
//                     const rand = createRand();
//                     // 事前処理
//                     await preAsyncDescriptor(rand);
//                     // methodの実行
//                     const ret = await method.apply(this, arguments);
//                     // 事後処理
//                     await afterAsyncDescriptor(rand);
//                     return ret;
//                 } catch (err) {
//                     await errorHandler(err);
//                 }
//             };
//         };
//         return res;
//     }

//     public ErrorHandle() {
//         const res: MethodDecorator = (target: object, name: string | symbol, descriptor: PropertyDescriptor) => {
//             const method = descriptor.value; // もともとのメソッドを退避しておきます。
//             const errorHandler = this.errorHandle;
//             descriptor.value = async function() {
//                 try {
//                     // methodの実行
//                     const ret = await method.apply(this, arguments);
//                     return ret;
//                 } catch (err) {
//                     await errorHandler(err);
//                 }
//             };
//         };
//         return res;
//     }

//     public errorHandle = async (err: ChillnnError) => {
//         this.promises.clear();
//         if (!this.promises.size) {
//             // loading end
//             this.$nuxt.$loading.finish();
//         }
//         const errInfo = errorHandle(err);
//         infoStore.addInfo(errInfo);
//     }

//     public preAsync = async (rand: string) => {
//         if (process.client) {
//             if (!this.promises.size) {
//                 // loading start
//                 await this.$nextTick();
//                 this.$nuxt.$loading.start();
//             }
//             this.promises.add(rand);
//         }
//     }
//     public afterAsync = async (rand: string) => {
//         if (process.client) {
//             this.promises.delete(rand);
//             if (!this.promises.size) {
//                 // loading end
//                 this.$nuxt.$loading.finish();
//             }
//         }
//     }

//     private createRand = () => {
//         return getShortID(14);
//     }
// }

// const decorator = new AbrDecorator();
// export const AsyncLoadingAndErrorHandle = decorator.Async;
// export const AsyncErrorHandle = decorator.ErrorHandle;
// export const handleErrorForCb = decorator.errorHandle;
// export const preAsync = decorator.preAsync;
// export const afterAsync = decorator.afterAsync;
