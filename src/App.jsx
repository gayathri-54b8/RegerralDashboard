import Header from "./components/Header"
import StatsCard from "./components/StatsCard"
import ReferralBox from "./components/ReferralBox"
import ReferralTable from "./components/ReferralTable"
import Footer from "./components/Footer"

import "./App.css"

const statsData = [
  {
    id: 1,
    title: "Total Balance",
    value: "$9,568.00",
    icon: "💰"
  },
  {
    id: 2,
    title: "Discount Percentage",
    value: "60%",
    icon: "🏷️"
  },
  {
    id: 3,
    title: "Total Referral",
    value: "300",
    icon: "👥"
  },
  {
    id: 4,
    title: "Discount Amount",
    value: "$300",
    icon: "💸"
  },
  {
    id: 5,
    title: "Commission Amount",
    value: "$465.00",
    icon: "💵"
  },
  {
    id: 6,
    title: "Total Earning",
    value: "$158.00",
    icon: "📈"
  },
  {
    id: 7,
    title: "Commission Discount",
    value: "40%",
    icon: "🎁"
  },
  {
    id: 8,
    title: "Total Bank Transfer",
    value: "$534.00",
    icon: "🏦"
  }
]

const App = () => {
  return (
    <div className="app">

      <Header />

      

      <div className="dashboard-top">

        <h1 className="dashboard-heading">
          Referral Dashboard
        </h1>

        <div className="dashboard-actions">

          <div className="search-box">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="search"
              placeholder="Search here..."
            />

          </div>

          <button className="search-btn">
            Search
          </button>

        </div>

      </div>

      

      <div className="cards-container">

        {statsData.map(each => (
          <StatsCard
            key={each.id}
            details={each}
          />
        ))}

      </div>

      
      <div className="stats-summary-container">

        <div className="summary-card">

          <p className="summary-label">
            Service
          </p>

          <div className="summary-value-row">

            <span className="summary-main-text">
              Some Service
            </span>

            <span className="summary-icon">
              ➜
            </span>

          </div>

        </div>

        <div className="summary-card">

          <p className="summary-label">
            Your Referrals
          </p>

          <div className="summary-value-row">

            <div className="summary-count-box">

              <span className="summary-count">
                0+
              </span>

              <span className="summary-user-icon">
                👥
              </span>

            </div>

            <div className="summary-count-box">

              <span className="summary-count">
                0
              </span>

            </div>

          </div>

        </div>

        <div className="summary-card">

          <p className="summary-label">
            Active Referrals
          </p>

          <div className="summary-value-row">

            <div className="summary-count-box">

              <span className="summary-count">
                0+
              </span>

              <span className="summary-user-icon">
                👥
              </span>

            </div>

            <div className="summary-count-box">

              <span className="summary-count">
                0
              </span>

            </div>

          </div>

        </div>

        <div className="summary-card">

          <p className="summary-label">
            Total Ref. Earnings
          </p>

          <h3 className="earning-text">
            $0.00
          </h3>

        </div>

      </div>

      

      <h2 className="refer-heading">
        Refer Friends And Earn More !!
      </h2>

      

      <div className="referral-container">

        <ReferralBox
          title="Your Referral Link"
          value="https://gobusiness.com/?referral=ABCXYZ"
        />

        <ReferralBox
          title="Your Referral Code"
          value="ABCXYZ"
        />

      </div>

      

      <ReferralTable />

      

      <Footer />

    </div>
  )
}

export default App