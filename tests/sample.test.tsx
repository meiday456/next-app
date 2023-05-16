describe.skip("sample", () => {
  it("toBe", () => {
    const a = {name: "kang"};
    const b = {name: "kang"};
    expect(a).toBe(b);
  });
  it("toEqual", () => {
    const a = {name: "kang"};
    const b = {name: "kang"};
    expect(a).toEqual(b);
  });
});

describe.skip("toEqual", () => {
  it("toEqual with undefined", () => {
    const a = {name: "kang"};
    const b = {name: "kang", age: undefined};
    expect(a).toEqual(b);
  });
  it("toStrictEqual", () => {
    const a = {name: "kang"};
    const b = {name: "kang", age: undefined};
    expect(a).toStrictEqual(b);
  });
});

describe.skip("object match", () => {
  it("property", () => {
    expect({foo: "bar", baz: "qux"}).toMatchObject({
      foo: expect.anything() as string,
      baz: expect.any(String) as string,
    });
  });
});

function randocall(fn: (param: any) => void) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

test.skip("randocall calls its callback with a number", () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toHaveBeenCalledWith(expect.any(Number));
});
