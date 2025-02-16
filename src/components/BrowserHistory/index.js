import {useState} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const BrowserHistory = () => {
  const [searchInput, setSearchInput] = useState('')
  const [historyList, setHistoryList] = useState(initialHistoryList)

  const handleSearch = event => {
    setSearchInput(event.target.value)
  }

  const deleteHistoryItem = id => {
    const updatedHistory = historyList.filter(each => each.id !== id)
    setHistoryList(updatedHistory)
  }

  const filteredHistory = historyList.filter(each =>
    each.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="app-container">
      {/* Search Bar */}
      <div className="search-bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="search-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search history"
            className="search-input"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* History List */}
      <div className="history-container">
        {filteredHistory.length > 0 ? (
          <ul className="history-list">
            {filteredHistory.map(each => (
              <li key={each.id} className="history-item">
                <p className="time">{each.timeAccessed}</p>
                <div className="history-details">
                  <img
                    src={each.logoUrl}
                    alt="domain logo"
                    className="domain-logo"
                  />
                  <div className="details-text">
                    <p className="title">{each.title}</p>
                    <p className="domain-url">{each.domainUrl}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="delete-button"
                  data-testid="delete"
                  onClick={() => deleteHistoryItem(each.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-history">There is no history to show</p>
        )}
      </div>
    </div>
  )
}

export default BrowserHistory
