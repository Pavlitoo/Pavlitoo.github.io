document.addEventListener("DOMContentLoaded", function () {
    const dishes = [
      { name: "Омлет", price: 20 },
      
      
    ];
  
    const dishSelect = document.getElementById("dishSelect");
    const quantityInput = document.getElementById("quantity");
    const addOrderButton = document.getElementById("addOrder");
    const orderList = document.getElementById("orderList");
    const totalPriceSpan = document.getElementById("totalPrice");
  
    let orders = [];
  
    
    dishes.forEach(dish => {
      const option = document.createElement("option");
      option.value = dish.price;
      option.textContent = dish.name;
      dishSelect.appendChild(option);
    });
  
    
    addOrderButton.addEventListener("click", function () {
      const selectedDish = dishSelect.options[dishSelect.selectedIndex].text;
      const selectedPrice = parseFloat(dishSelect.value);
      const quantity = parseInt(quantityInput.value);
  
      const order = {
        name: selectedDish,
        price: selectedPrice,
        quantity: quantity
      };
  
      orders.push(order);
      renderOrders();
    });
  
    
    orderList.addEventListener("click", function (event) {
      if (event.target && event.target.matches("button.remove")) {
        const index = event.target.dataset.index;
        orders.splice(index, 1);
        renderOrders();
      }
    });
  
    
    function renderOrders() {
      orderList.innerHTML = "";
      let total = 0;
  
      orders.forEach((order, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${order.name} x ${order.quantity} - $${order.price * order.quantity}`;
  
        const removeButton = document.createElement("button");
        removeButton.textContent = "Удалить";
        removeButton.classList.add("remove");
        removeButton.dataset.index = index;
  
        listItem.appendChild(removeButton);
        orderList.appendChild(listItem);
  
        total += order.price * order.quantity;
      });
  
      totalPriceSpan.textContent = total;
    }
  });

  
  