const inventory = [
  { type: "machine", value: 5000 },

  { type: "machine", value: 650 },

  { type: "duck", value: 10 },

  { type: "furniture", value: 1200 },

  { type: "machine", value: 77 },
];

function countMachineValue() {
  let tong = 0;
  inventory.forEach((item) => {
    if (item.type == "machine") {
      tong += item.value;
    }
  });
  console.log(tong);
}

countMachineValue();
