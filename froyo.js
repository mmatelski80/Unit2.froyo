const countFrequencies = (strings) => {
    const orders = {};
    for (const str of strings) {
      if (str in orders) {
        orders[str] += 1;
      } else {
        orders[str] = 1;
      }
    }
    return orders;
  };
  
  const order = prompt(
    "Please enter a list of comma-separated flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  const flavors = order.split(",");