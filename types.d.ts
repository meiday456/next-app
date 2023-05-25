declare module "*module.css" {
  const styles: Record<string, string>;
  export default styles;
}

declare let context: jest.Describe;
