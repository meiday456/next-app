export type FulfilledHandler<T> = (value: T) => T | Promise<T>;

export type RejectedHandler = (error: any) => any;

export interface AxiosInterceptorHandleItem<V> {
  fulfilled: FulfilledHandler<V>;
  rejected: RejectedHandler;
  synchronous: boolean;
  runWhen: (config: AxiosRequestConfig) => boolean | null;
}

declare module "axios" {
  export interface AxiosInterceptorManager<V> {
    // interceptor handle item
    handlers: AxiosInterceptorHandleItem<V>[];

    use<T = V>(
      onFulfilled?: FulfilledHandler<T>,
      onRejected?: RejectedHandler,
      options?: AxiosInterceptorOptions,
    ): number;

    eject(id: number): void;
  }
}
