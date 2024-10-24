import React, { useState } from "react";

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content: "Content for Tab 1.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "Content for Tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "Content for Tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: "Content for Tab 4.",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container">
      <h1>hello world</h1>
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabTitle}
          </div>
        ))}
      </div>
      <div className="content">
        <h2>{activeContent.title}</h2>
        <p>{activeContent.content}</p>
      </div>
    </div>
  );
};

export default Tabs;
