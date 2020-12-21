declare module 'dify-bin' {
  import BManager from 'bin-manager';

  export default function dify(arguments: string[], callback: Function): typeof BManager;
}
