const fs = require('fs');

const html = fs.readFileSync('catering-menu.html', 'utf8');

// The marker where the old sections start
const startMarker = '<!-- 2. TUSCAN TABLE EXPERIENCE -->';
const endMarker = '<!-- ADDITIONAL INFO -->';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Markers not found");
    process.exit(1);
}

const oldSectionsHtml = html.substring(startIndex, endIndex);

// Let's manually define the data based on what I read from the file
const menus = [
    {
        id: 'tuscan-modal',
        title: 'TUSCAN TABLE EXPERIENCE',
        desc: 'Comfort-driven Italian favorites layered with rich flavor and elevated presentation.',
        image: 'assets/hero_plated_steak.png', // Fallback local image since we can't be sure of internet
        reverse: true,
        previewItems: [
            { name: 'CHICKEN PARMESAN', desc: 'Marinara, Mozzarella' },
            { name: 'FETTUCCINE ALFREDO', desc: 'Creamy Parmesan Sauce' }
        ],
        categories: [
            {
                name: 'Includes',
                items: [
                    { name: 'Choice of 1 Entrée Protein' },
                    { name: 'Italian Salad' },
                    { name: 'Seasonal Vegetable' },
                    { name: 'Choice of Starch/Pasta' },
                    { name: 'Dessert Selection & Garlic Bread' }
                ]
            },
            {
                name: 'Protein Selections',
                items: [
                    { name: 'Chicken Parmesan' },
                    { name: 'Chicken Piccata' },
                    { name: 'Italian Sausage & Peppers' },
                    { name: 'Meatballs in Marinara' },
                    { name: 'Baked Herb Salmon' }
                ]
            },
            {
                name: 'Starch & Veg',
                items: [
                    { name: 'Fettuccine Alfredo' },
                    { name: 'Penne Marinara' },
                    { name: 'Roasted Broccoli' },
                    { name: 'Garlic Green Beans' }
                ]
            },
            {
                name: 'Dessert Options',
                items: [
                    { name: 'Tiramisu' },
                    { name: 'Cannoli Dip Cups' },
                    { name: 'Italian Cream Cake' },
                    { name: '+ Additional Protein Selection' }
                ]
            }
        ]
    },
    {
        id: 'comfort-modal',
        title: 'THE COMFORT TABLE',
        desc: 'Classic comfort food with bold flavor and cookout-inspired energy.',
        image: 'assets/hero_candlelit_dinner.png', // Fallback
        reverse: false,
        previewItems: [
            { name: 'SMOKED PULLED PORK', desc: 'Slow-smoked, House BBQ' },
            { name: 'MAC & CHEESE', desc: 'Four-Cheese Blend, Baked' }
        ],
        categories: [
            {
                name: 'Includes',
                items: [
                    { name: 'Choice of 1 Entrée Protein' },
                    { name: 'Garden Salad' },
                    { name: 'Choice of Two Sides' },
                    { name: 'Dessert Selection & Dinner Rolls' }
                ]
            },
            {
                name: 'Protein Selections',
                items: [
                    { name: 'BBQ Chicken' },
                    { name: 'Smoked Pulled Pork' },
                    { name: 'Hamburger Sliders' },
                    { name: 'Fried Chicken' },
                    { name: 'Meatloaf with Brown Gravy' }
                ]
            },
            {
                name: 'Side Selections',
                items: [
                    { name: 'Mac & Cheese' },
                    { name: 'Baked Beans' },
                    { name: 'Mashed Potatoes' },
                    { name: 'Roasted Corn' },
                    { name: 'Southern Green Beans' }
                ]
            },
            {
                name: 'Dessert Options',
                items: [
                    { name: 'Banana Pudding' },
                    { name: 'Peach Cobbler' },
                    { name: 'Chocolate Brownies' },
                    { name: '+ Additional Protein Selection' }
                ]
            }
        ]
    },
    {
        id: 'cantina-modal',
        title: 'THE CANTINA EXPERIENCE',
        desc: 'Bold, vibrant flavors with customizable options your guests can build and enjoy.',
        image: 'assets/romance_wine_pour.png', // Fallback
        reverse: true,
        previewItems: [
            { name: 'STEAK FAJITAS', desc: 'Grilled Flank Steak, Peppers & Onions' },
            { name: 'CHICKEN FAJITAS', desc: 'Citrus Marinade, Cilantro' }
        ],
        categories: [
            {
                name: 'Includes',
                items: [
                    { name: 'Choice of 1 Entrée Protein' },
                    { name: 'Mexican Rice' },
                    { name: 'Refried or Black Beans' },
                    { name: 'Chips & Salsa' },
                    { name: 'Dessert Selection' }
                ]
            },
            {
                name: 'Protein Selections',
                items: [
                    { name: 'Chicken Fajitas' },
                    { name: 'Steak Fajitas' },
                    { name: 'Ground Beef Taco Filling' },
                    { name: 'Carnitas' },
                    { name: 'Citrus Shrimp' }
                ]
            },
            {
                name: 'Toppings Bar',
                items: [
                    { name: 'Pico de Gallo' },
                    { name: 'Sour Cream' },
                    { name: 'Queso & Guacamole' },
                    { name: 'Jalapeños' },
                    { name: 'Cheese Blend' }
                ]
            },
            {
                name: 'Dessert Options',
                items: [
                    { name: 'Churro Bites' },
                    { name: 'Tres Leches Cups' },
                    { name: 'Cinnamon Sugar Cookies' },
                    { name: '+ Additional Protein Selection' }
                ]
            }
        ]
    },
    {
        id: 'umami-modal',
        title: 'THE UMAMI TABLE',
        desc: 'Savory, balanced dishes inspired by comforting Asian flavors and modern fusion.',
        image: 'assets/cta_couple_dining_v2.png', // Fallback
        reverse: false,
        previewItems: [
            { name: 'TERIYAKI CHICKEN', desc: 'House Teriyaki, Sesame Seeds' },
            { name: 'KOREAN BBQ BEEF', desc: 'Bulgogi style, Green Onions' }
        ],
        categories: [
            {
                name: 'Includes',
                items: [
                    { name: 'Choice of 1 Entrée Protein' },
                    { name: 'Vegetable Fried Rice or Lo Mein' },
                    { name: 'Stir-Fried Vegetables' },
                    { name: 'Dessert Selection' }
                ]
            },
            {
                name: 'Protein Selections',
                items: [
                    { name: 'Teriyaki Chicken' },
                    { name: 'Korean BBQ Beef' },
                    { name: 'Sweet Chili Salmon' },
                    { name: 'Orange Chicken' },
                    { name: 'Sesame Garlic Tofu' }
                ]
            },
            {
                name: 'Side Options',
                items: [
                    { name: 'Vegetable Fried Rice' },
                    { name: 'Chicken Fried Rice' },
                    { name: 'Lo Mein Noodles' },
                    { name: 'Jasmine Rice' }
                ]
            },
            {
                name: 'Dessert Options',
                items: [
                    { name: 'Mochi Ice Cream' },
                    { name: 'Fried Cheesecake Bites' },
                    { name: 'Fortune Cookie Tray' },
                    { name: '+ Additional Protein Selection' }
                ]
            }
        ]
    },
    {
        id: 'harvest-modal',
        title: 'HARVEST TABLE',
        desc: 'Fresh, colorful, and fully customizable for lighter gatherings and wellness-focused events.',
        image: 'assets/hero_plated_steak.png', // Fallback
        reverse: true,
        previewItems: [
            { name: 'GRILLED CHICKEN', desc: 'Herb Marinated, Sliced' },
            { name: 'BLACKENED SALMON', desc: 'Cajun Spices, Lemon' }
        ],
        categories: [
            {
                name: 'Includes',
                items: [
                    { name: 'Assorted Greens (Romaine, Spring Mix, Spinach)' },
                    { name: 'Vegetables & Toppings' },
                    { name: 'Choice of Protein & Cheese' },
                    { name: 'Selection of Dressings' }
                ]
            },
            {
                name: 'Protein & Cheese',
                items: [
                    { name: 'Grilled Chicken / Steak' },
                    { name: 'Blackened Salmon / Tofu' },
                    { name: 'Feta / Cheddar' },
                    { name: 'Parmesan / Blue Cheese' }
                ]
            },
            {
                name: 'Dressings',
                items: [
                    { name: 'Ranch / Caesar' },
                    { name: 'Balsamic Vinaigrette' },
                    { name: 'Honey Mustard' },
                    { name: 'Sesame Ginger' }
                ]
            },
            {
                name: 'Flavor Enhancements',
                items: [
                    { name: 'Soup Pairing' },
                    { name: 'Bread Basket' },
                    { name: 'Additional Protein Selection' }
                ]
            }
        ]
    },
    {
        id: 'loaded-modal',
        title: 'THE LOADED TABLE',
        desc: 'A hearty interactive station featuring loaded baked potatoes with elevated toppings and bold flavor combinations.',
        image: 'assets/hero_candlelit_dinner.png', // Fallback
        reverse: false,
        previewItems: [
            { name: 'BAKED IDAHO POTATOES', desc: 'Fluffy, Hot, Salt Crusted' },
            { name: 'BEEF CHILI', desc: 'Slow-simmered, Robust Flavor' }
        ],
        categories: [
            {
                name: 'Includes',
                items: [
                    { name: 'Russet & Sweet Potatoes' },
                    { name: 'Assorted Toppings Bar' },
                    { name: 'Side Salad' }
                ]
            },
            {
                name: 'Protein Toppings',
                items: [
                    { name: 'Pulled Pork' },
                    { name: 'BBQ Chicken' },
                    { name: 'Chili' },
                    { name: 'Bacon Crumbles' },
                    { name: 'Broccoli Cheddar' }
                ]
            },
            {
                name: 'Classic Toppings',
                items: [
                    { name: 'Sour Cream / Butter' },
                    { name: 'Green Onions' },
                    { name: 'Jalapeños' },
                    { name: 'Cheese Sauce / Shredded' },
                    { name: 'Crispy Onions' }
                ]
            },
            {
                name: 'Flavor Enhancements',
                items: [
                    { name: 'Additional Protein Selection' },
                    { name: 'Dessert Tray' },
                    { name: 'Beverage Station' }
                ]
            }
        ]
    }
];

let newSectionsHtml = '';

for (const menu of menus) {
    let previewHtml = '';
    for (const item of menu.previewItems) {
        previewHtml += `
                            <h3 class="card-item-title">${item.name}</h3>
                            <p class="card-item-desc">${item.desc}</p>`;
    }

    let categoriesHtml = '';
    for (const cat of menu.categories) {
        categoriesHtml += `
                    <h2 class="kj-ds-category-title">${cat.name}</h2>`;
        for (const item of cat.items) {
            categoriesHtml += `
                    <div class="kj-ds-menu-item">
                        <div class="kj-ds-item-info">
                            <div class="kj-ds-item-title-row"><h3 class="kj-ds-item-name">${item.name}</h3><span class="kj-ds-ornament"></span></div>
                        </div>
                    </div>`;
        }
    }

    const layoutClass = menu.reverse ? 'luxury-menu-container reverse-layout' : 'luxury-menu-container';
    const textClass = menu.reverse ? 'vertical-text left' : 'vertical-text';

    newSectionsHtml += `
            <!-- ${menu.title} -->
            <div class="luxury-menu-section reveal" style="grid-column: 1 / -1; margin-bottom: 80px;">
                <div class="${layoutClass}">
                    <!-- Left: Menu Preview Card -->
                    <div class="luxury-preview-card">
                        <div class="card-inner">
                            <h3 class="card-subtitle-brand" style="font-family: 'Block Burst', sans-serif; font-size: 1.5rem; letter-spacing: 2px; color: var(--gold); margin-bottom: 10px; text-align: center; text-transform: uppercase;">${menu.title}</h3>
                            <p class="card-desc-brand" style="font-family: var(--font-body); font-size: 0.85rem; color: #aaa; font-style: italic; text-align: center; margin-bottom: 40px; line-height: 1.5;">${menu.desc}</p>
                            ${previewHtml}
                            
                            <button class="btn btn-gold" style="margin-top: 30px;" onclick="openModal('${menu.id}')">VIEW FULL MENU</button>
                        </div>
                    </div>

                    <!-- Right: Arched Image & Vertical Text -->
                    <div class="luxury-image-wrap">
                        <div class="arched-frame">
                            <img src="${menu.image}" alt="${menu.title}">
                        </div>
                        <div class="${textClass}">${menu.title.replace(' THE', '').replace('THE ', '')}</div>
                    </div>
                </div>
            </div>

            <!-- MODAL STRUCTURE -->
            <div id="${menu.id}" class="kj-ds-modal">
                <span class="kj-ds-close-btn" onclick="closeModal('${menu.id}')">&times;</span>
                <div class="kj-ds-modal-inner">
                    ${categoriesHtml}
                    <div style="text-align: center; margin-top: 50px;">
                        <button class="btn btn-gold" onclick="closeModal('${menu.id}')">Close Menu</button>
                    </div>
                </div>
            </div>
`;
}

// remove the end of catering-grid div if it's there
let endBlock = html.substring(endIndex);

const finalHtml = html.substring(0, startIndex) + newSectionsHtml + '        </div>\n    </section>\n\n    ' + endBlock;
fs.writeFileSync('catering-menu.html', finalHtml, 'utf8');
console.log('Successfully replaced menus');
