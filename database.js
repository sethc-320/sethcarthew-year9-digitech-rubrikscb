const menuItems = [
    { name: "Blackberry Muffin", price: 5.60, calories: 340, image: "blackberry-muffin.png", type: "Pastry", allergens: "Gluten, Dairy, Eggs" },
    { name: "Ham + Cheese Croissant", price: 7.30, calories: 420, image: "ham-cheese-croissant.png", type: "Breakfast", allergens: "Gluten, Dairy" },
    { name: "Almond Croissant", price: 6.30, calories: 510, image: "almond-croissant.png", type: "Pastry", allergens: "Gluten, Dairy, Tree Nuts" },
    { name: "Grande Caffe Latte", price: 3.20, calories: 190, image: "caffe-latte.png", type: "Drink", allergens: "Dairy" },
    { name: "Caramel Frappe + Cream", price: 5.40, calories: 410, image: "caramel-frap.png", type: "Drink", allergens: "Dairy" },
    { name: "Mini Eggs Frappe", price: 5.40, calories: 380, image: "easter-drink1.png", type: "Seasonal", allergens: "Dairy, Nuts, Tree Nuts" },
    { name: "Unsweetened Green Tea", price: 4.60, calories: 0, image: "unsweetened-green-tea.png", type: "Drink", allergens: "None" },
    { name: "Quiche Lorraine", price: 8.50, calories: 540, image: "quiche-lorraine.png", type: "Lunch", allergens: "Gluten, Dairy, Eggs" },
    { name: "Sausage Roll", price: 6.50, calories: 480, image: "sausage-roll.png", type: "Lunch", allergens: "Gluten" },
    { name: "Feta Bistro Bun", price: 6.30, calories: 320, image: "spinach-feta-bun.png", type: "Pastry", allergens: "Gluten, Dairy" },
    { name: "Avocado Toast", price: 11.20, calories: 310, image: "avocado-toast.png", type: "Breakfast", allergens: "Gluten" },
    { name: "Breakfast Burrito", price: 9.40, calories: 580, image: "breakfast-burrito.png", type: "Breakfast", allergens: "Gluten, Dairy, Eggs" },
    { name: "Chocolate Chunk Cookie", price: 3.50, calories: 280, image: "choc-chunk-cookie.png", type: "Pastry", allergens: "Gluten, Dairy, Soy" },
    { name: "Lemon Poppyseed Loaf", price: 4.80, calories: 310, image: "lemon-poppyseed-roll.png", type: "Pastry", allergens: "Gluten, Eggs" },
    { name: "Cinnamon Roll", price: 5.50, calories: 450, image: "cinnamon-roll.png", type: "Pastry", allergens: "Gluten, Dairy" },
    { name: "Fudge Brownie", price: 4.30, calories: 390, image: "fudge-brownie.png", type: "Pastry", allergens: "Dairy, Eggs, Soy" },
    { name: "Fruit Tart", price: 6.80, calories: 240, image: "fruit-tart.png", type: "Pastry", allergens: "Gluten, Dairy, Eggs" },
    { name: "Eclair", price: 5.40, calories: 310, image: "eclair.png", type: "Pastry", allergens: "Gluten, Dairy, Eggs" },
    { name: "Macarons", price: 2.50, calories: 90, image: "macaron.png", type: "Pastry", allergens: "Eggs, Tree Nuts" },
    { name: "Scone", price: 4.20, calories: 310, image: "scone.png", type: "Pastry", allergens: "Gluten, Dairy" },
    { name: "Sourdough Loaf", price: 8.00, calories: 1100, image: "sourdough-loaf.png", type: "Bakery", allergens: "Gluten" },
    { name: "Everything Bagel", price: 3.80, calories: 290, image: "everything-bagel.png", type: "Breakfast", allergens: "Gluten" },
    { name: "Banana Bread", price: 5.20, calories: 340, image: "banana-bread.png", type: "Pastry", allergens: "Gluten, Eggs" },
    { name: "Overnight Oats", price: 7.40, calories: 320, image: "overnight-oats.png", type: "Breakfast", allergens: "Gluten (Oats), Dairy" },
    { name: "Greek Yogurt Parfait", price: 6.90, calories: 260, image: "yogurt-parfait.png", type: "Breakfast", allergens: "Dairy, Tree Nuts" },
    { name: "Biscotti", price: 2.20, calories: 120, image: "biscotti.png", type: "Pastry", allergens: "Gluten, Eggs, Tree Nuts" },
	{ name: "Salty Pretzel", price: 4.30, calories: 253, image: "pretzel.png", type: "Lunch", allergens: "Dairy, Gluten, Nuts" },
    { name: "White Bread Loaf", price: 2.20, calories: 567, image: "white-loaf.png", type: "Pastry", allergens: "Gluten, Eggs, Dairy" },
];

const searchInput = document.getElementById('menuSearch');
const dropdown = document.getElementById('dropdownResults');
const mainDisplay = document.getElementById('mainDisplay');

function renderMainGrid(items) {
    mainDisplay.innerHTML = items.map(item => `
        <div style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: all 0.3s ease; position: relative;" 
             onmouseover="this.querySelector('.info-overlay').style.transform='translateY(0)'; this.style.transform='translateY(-5px)';" 
             onmouseout="this.querySelector('.info-overlay').style.transform='translateY(100%)'; this.style.transform='translateY(0)';" >
            
            <img src="${item.image}" style="width: 100%; height: 220px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/260x220?text=${item.name}'">
            
            <div style="padding: 15px;">
                <h3 style="margin: 0; font-size: 1.1rem; color: #4a3f35;">${item.name}</h3>
                <p style="margin: 5px 0 0; font-weight: bold; color: #8b7e74;">$${item.price.toFixed(2)}</p>
            </div>

            <div class="info-overlay" style="position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(93, 84, 75, 0.95); color: #f3e9dc; padding: 15px; box-sizing: border-box; transform: translateY(100%); transition: transform 0.3s ease; font-size: 0.85rem;">
                <div style="text-transform: uppercase; font-weight: bold; font-size: 0.7rem; letter-spacing: 1px; margin-bottom: 5px;">${item.type}</div>
                <div style="font-style: italic; opacity: 0.9;">May contain: ${item.allergens}</div>
                <div style="margin-top: 5px; font-weight: bold;">${item.calories} kcal</div>
            </div>
        </div>
    `).join('');
}

function updateDropdown(items, term) {
    if (!term) { dropdown.innerHTML = ""; return; }
    const top5 = items.slice(0, 5);
    dropdown.innerHTML = top5.map(item => `
        <div style="padding: 12px 15px; border-bottom: 1px solid #f8f4f0; display: flex; align-items: center; cursor: pointer;" onclick="selectItem('${item.name}')">
            <div style="width: 45px; height: 45px; border-radius: 8px; overflow: hidden; margin-right: 15px; border: 1px solid #000;">
                <img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="display: flex; flex-direction: column;">
                <span style="font-weight: bold; color: #4a3f35;">${item.name}</span>
                <span style="font-size: 0.75rem; color: #8b7e74;">${item.type} | $${item.price.toFixed(2)}</span>
            </div>
        </div>
    `).join('');
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = menuItems.filter(i => i.name.toLowerCase().includes(term));
    updateDropdown(filtered, term);
    renderMainGrid(filtered);
});

window.selectItem = function(name) {
    searchInput.value = name;
    renderMainGrid(menuItems.filter(i => i.name === name));
    dropdown.innerHTML = "";
};

renderMainGrid(menuItems);