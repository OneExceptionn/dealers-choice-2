const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/riot-champions')

const Champions = db.define('champions', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    region: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lane: {
        type: Sequelize.STRING,
        allowNull: false
    },
    damageType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const syncAndSeed = async() => {
    await db.sync({ force:true })
    const [ Ashe, Garen, Ryze, Soraka, Warwick ] = await Promise.all([
        Champions.create ({name: 'Ashe', region: 'Freljord', lane: 'Bottom', damageType: 'Physical', image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg'}),
        Champions.create ({name: 'Garen', region: 'Demacia', lane: 'Top', damageType: 'Physical', image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg'}),
        Champions.create ({name: 'Ryze', region: 'Runeterra', lane: 'Mid', damageType: 'Magic', image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg'}),
        Champions.create ({name: 'Soraka', region: 'Targon', lane: 'Support', damageType: 'Magic', image:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg'}),
        Champions.create ({name: 'Warwick', region: 'Zaun', lane: 'Jungle', damageType: 'Physical', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg'})
    ])
}

module.exports = {
    syncAndSeed,
    Champions
}