import React, { useState, useEffect } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [tabContent, setTabContent] = useState("Loading...");

  const tabs = [
    { id: 1, title: "Tab 1" },
    { id: 2, title: "Tab 2" },
    { id: 3, title: "Tab 3" },
    { id: 4, title: "Tab 4" },
  ];

  useEffect(() => {
    fetchContent();
  }, [activeTab]);

  const fetchContent = async () => {
    try {
      const response = await fetch(
        `https://corsproxy.io/?https://loripsum.net/api`
      );
      const data = await response.text();
      setTabContent(data);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="content">
        <h2>Title {activeTab}</h2>
        <div dangerouslySetInnerHTML={{ __html: tabContent }} />{" "}
      </div>
    </div>
  );
};

export default Tabs;
