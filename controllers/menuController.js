const Menu = require('../module/Menu');
const menu = require('../module/Menu.json');

const getMenu = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

const populateMenu = async (req, res) => {
  try {
    // Clear existing data
    await Menu.deleteMany({});

    // Insert data from JSON file
    const menuData = menu;
    await Menu.insertMany(menuData);

    res.json({ message: 'Menu data populated successfully', count: menuData.length });
  } catch (error) {
    console.error('Error populating menu:', error);
    res.status(500).json({ error: 'Failed to populate menu data' });
  }
};

module.exports = {
  getMenu,
  populateMenu
};
