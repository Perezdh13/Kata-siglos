const siglos = require("../KataSiglos/KataSiglos")

test("calculamos siglo 1",()=>{
  expect(siglos(80)).toBe("siglo 1");
});
test("calculamos siglo 2",()=>{
  expect(siglos(101)).toBe("siglo 2");
});
test("calculamos siglo 3",()=>{
  expect(siglos(250)).toBe("siglo 3");
});
test("calculamos siglo 4",()=>{
  expect(siglos(380)).toBe("siglo 4");
});
test("calculamos siglo 5",()=>{
  expect(siglos(450)).toBe("siglo 5");
});
test("calculamos siglo 6",()=>{
  expect(siglos(590)).toBe("siglo 6");
});
test("calculamos siglo 7",()=>{
  expect(siglos(601)).toBe("siglo 7");
});
test("calculamos siglo 8",()=>{
  expect(siglos(701)).toBe("siglo 8");
});
test("calculamos siglo 9",()=>{
  expect(siglos(801)).toBe("siglo 9");
});
test("calculamos siglo 10",()=>{
  expect(siglos(901)).toBe("siglo 10");
});
test("calculamos siglo 11",()=>{
  expect(siglos(1025)).toBe("siglo 11");
});
test("calculamos siglo 12",()=>{
  expect(siglos(1101)).toBe("siglo 12");
});
test("calculamos siglo 13",()=>{
  expect(siglos(1221)).toBe("siglo 13");
});
test("calculamos siglo 14",()=>{
  expect(siglos(1331)).toBe("siglo 14");
});
test("calculamos siglo 15",()=>{
  expect(siglos(1461)).toBe("siglo 15");
});
test("calculamos siglo 16",()=>{
  expect(siglos(1531)).toBe("siglo 16");
});
test("calculamos siglo 17",()=>{
  expect(siglos(1681)).toBe("siglo 17");
});
test("calculamos siglo 18",()=>{
  expect(siglos(1755)).toBe("siglo 18");
});
test("calculamos siglo 19",()=>{
  expect(siglos(1805)).toBe("siglo 19");
});
test("calculamos siglo 20",()=>{
  expect(siglos(1991)).toBe("siglo 20");
});
test("calculamos siglo 21",()=>{
  expect(siglos(2022)).toBe("siglo 21");
});

