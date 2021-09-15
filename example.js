// Scrape by aditia
// Please include source code
const axios = require('axios')
const get = require('got')

module.exports = plays = (play) => new Promise((resolve, reject) => {
axios.get(`https://api.github.com/users/${play}`).then((data) => {
const {data : { avatar_url, url, name, bio, created_at, updated_at, type, login, subscriptions_url, followers_url, organizations_url, repos_url, public_repos, following, followers } } = data
             resolve({
owner: "Aditia",
status: 'success',
result: {
	username: login,
	followers_url: followers_url,
	subscriptions_url: subscriptions_url, 
	organizations_url: organizations_url,
	repos_url: repos_url,
   user: {
	avatar: avatar_url,
	link: url,
	nama: name,
	bio: bio,
	public_repos: public_repos,
	following: following,
	followers: followers,
	dibuat_pada: created_at,
	update_pada: updated_at,
	type: type,
	},
}
})
          
        }).catch((err) => {
            console.error(err)
            reject(err)
         })
})
