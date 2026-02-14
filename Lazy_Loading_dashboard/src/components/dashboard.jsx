import React from 'react';
import './dashboard.css';

const Dashboard = () => {
  const stats = [
    { icon: '👥', label: 'TOTAL USERS', value: '1,250', change: '+12% from last month', positive: true },
    { icon: '🟢', label: 'ACTIVE USERS', value: '342', change: 'Currently online', positive: true },
    { icon: '💰', label: 'TOTAL SALES', value: '$45,290', change: '+8.5% from last week', positive: true },
    { icon: '📈', label: 'CONVERSION RATE', value: '3.24%', change: '+0.5% from yesterday', positive: true },
  ];

  const activities = [
    { name: 'John Doe', action: 'Logged in', time: '2 mins ago' },
    { name: 'Jane Smith', action: 'Updated profile', time: '15 mins ago' },
    { name: 'Mike Johnson', action: 'Made a purchase', time: '1 hour ago' },
    { name: 'Sarah Williams', action: 'Posted a comment', time: '3 hours ago' },
    { name: 'Tom Brown', action: 'Shared content', time: '5 hours ago' },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const salesData = [35, 55, 40, 70, 50, 65];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your analytics dashboard</p>
      </header>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        <div className="chart-section">
          <h2>Sales Trend</h2>
          <div className="chart-container">
            <div className="chart-bars">
              {salesData.map((value, index) => (
                <div key={index} className="bar-wrapper">
                  <div 
                    className="bar" 
                    style={{ height: `${value}%` }}
                  ></div>
                  <span className="bar-label">{months[index]}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="chart-caption">Sales in dollars (×100)</p>
        </div>

        <div className="activity-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-pin">📌</div>
                <div className="activity-info">
                  <span className="activity-name">{activity.name}</span>
                  <span className="activity-action">{activity.action}</span>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
