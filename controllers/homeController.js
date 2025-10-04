const Home = require('../module/home');
const home = require('../module/home.json');

const getHome = async (req, res) => {
  try {
    const homeData = await Home.findOne();
    res.json({home: homeData});
  } catch (error) {
    console.error('Error fetching home:', error);
    res.status(500).json({ error: 'Failed to fetch home data' });
  }
};

const populateHome = async (req, res) => {
  try {
    await Home.deleteMany({});
    const homeData = home.home;
    await Home.create(homeData);
    res.json({ message: 'Home data populated successfully' });
  } catch (error) {
    console.error('Error populating home:', error);
    res.status(500).json({ error: 'Failed to populate home data' });
  }
};

module.exports = {
  getHome,
  populateHome
};
