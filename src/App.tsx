import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [level, setLevel] = useState(1);
  const [points, setPoints] = useState(500);
  const [showReward, setShowReward] = useState(false);
  const [learningStyle, setLearningStyle] = useState('visual'); // visual, audio, practical
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);

  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    
    const newLevel = Math.floor(newPoints / 1000) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      if (newLevel === 10) {
        setShowReward(true);
      }
    }
  };

  const completeQuest = (questId: string, questPoints: number) => {
    if (!completedQuests.includes(questId)) {
      setCompletedQuests([...completedQuests, questId]);
      addPoints(questPoints);
    }
  };

  const getPersonalizedQuests = () => {
    const baseQuests = [
      {
        id: 'math-puzzle',
        title: '🔺 Mathematical Puzzle',
        description: learningStyle === 'visual' 
          ? 'Solve colorful geometric puzzles' 
          : learningStyle === 'audio'
          ? 'Listen to math concepts explained through stories'
          : 'Build physical models to understand geometry',
        subject: 'Mathematics',
        points: 150,
        practicalUse: 'Develops logical thinking for programming and engineering',
        type: learningStyle
      },
      {
        id: 'science-experiment',
        title: '🔬 Science Experiment',
        description: learningStyle === 'visual'
          ? 'Watch interactive simulations of physics laws'
          : learningStyle === 'audio'
          ? 'Audio-guided virtual lab experiments'
          : 'Hands-on experiments with household items',
        subject: 'Science',
        points: 200,
        practicalUse: 'Understand real-world phenomena and technology principles',
        type: learningStyle
      },
      {
        id: 'history-quest',
        title: '🏛️ History Adventure',
        description: learningStyle === 'visual'
          ? 'Explore historical sites through VR'
          : learningStyle === 'audio'
          ? 'Historical events as audio dramas'
          : 'Recreate historical artifacts',
        subject: 'History',
        points: 100,
        practicalUse: 'Learn from past mistakes and cultural development',
        type: learningStyle
      }
    ];

    return baseQuests;
  };

  const getTeamChallenges = () => [
    {
      id: 'team-math',
      name: 'Math Masters',
      members: 5,
      totalPoints: 2500,
      currentChallenge: 'Algebra Tournament',
      progress: 75
    },
    {
      id: 'team-science',
      name: 'Science Explorers', 
      members: 3,
      totalPoints: 1800,
      currentChallenge: 'Physics Olympics',
      progress: 60
    },
    {
      id: 'team-creative',
      name: 'Creative Thinkers',
      members: 4,
      totalPoints: 2100,
      currentChallenge: 'Innovation Project',
      progress: 90
    }
  ];

 const airpodsImage = "data:image/jpeg;base64,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";

  const renderContent = () => {
    if (page === 'home') {
      return (
        <div className="app-card">
          <h1 className="app-title">🎯 EduQuest Adventure</h1>
          <p className="app-text">
            Transform learning into an exciting journey! Earn points, complete quests, and discover why knowledge matters in real life.
          </p>
          
          {/* Immediate Feedback Progress */}
          <div className="stats-container">
            <span>Level: <strong>{level}</strong></span>
            <span>Points: <strong>⭐ {points}</strong></span>
            <span>Quests: <strong>{completedQuests.length}</strong></span>
          </div>
          
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(points % 1000) / 10}%` }}></div>
          </div>

          {/* Learning Style Selection - Individual Differences */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '10px', color: '#1e40af' }}>
              🎨 Your Learning Style
            </h3>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              {['visual', 'audio', 'practical'].map(style => (
                <button
                  key={style}
                  onClick={() => setLearningStyle(style)}
                  className={learningStyle === style ? "app-button" : "app-button secondary-button"}
                  style={{ padding: '8px 16px', fontSize: '14px' }}
                >
                  {style === 'visual' ? '👁️ Visual' : style === 'audio' ? '🎵 Audio' : '🛠️ Practical'}
                </button>
              ))}
            </div>
          </div>

          {/* Next Reward */}
          <div style={{
            background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '20px',
            textAlign: 'center',
            border: '2px solid #ffb700'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#8b6914' }}>🎁 Adventure Reward</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
              <img 
                src={airpodsImage} 
                alt="AirPods" 
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  border: '2px solid #8b6914'
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', color: '#8b6914', fontSize: '16px' }}>AirPods Pro</div>
                <div style={{ fontSize: '12px', color: '#8b6914' }}>Unlock at Level 10</div>
              </div>
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: '#8b6914', 
              marginTop: '8px',
              fontWeight: 'bold'
            }}>
              {level >= 10 ? '✅ Adventure Complete!' : `Progress: ${level}/10`}
            </div>
          </div>
          
          {/* Main Navigation */}
          <button className="app-button" onClick={() => setPage('quests')}>
            🗺️ Start Learning Adventure
          </button>
          
          <button className="app-button secondary-button" onClick={() => setPage('team')}>
            👥 Join Team Adventure
          </button>

          <button className="app-button secondary-button" onClick={() => setPage('practical')}>
            💡 Why Learn This?
          </button>

          {/* Quick Actions */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <button 
              className="app-button secondary-button" 
              onClick={() => addPoints(100)}
              style={{ flex: 1, padding: '8px', fontSize: '12px' }}
            >
              +100 Points
            </button>
            <button 
              className="app-button secondary-button" 
              onClick={() => addPoints(500)}
              style={{ flex: 1, padding: '8px', fontSize: '12px' }}
            >
              +500 Points
            </button>
          </div>
        </div>
      );
    }

    if (page === 'quests') {
      const personalizedQuests = getPersonalizedQuests();
      
      return (
        <div className="app-card">
          <button className="app-button secondary-button" onClick={() => setPage('home')} style={{ marginBottom: '20px' }}>
            ← Back to Adventure Map
          </button>
          
          <h1 className="app-title">🗺️ Learning Adventures</h1>
          <p className="app-text" style={{ fontSize: '14px', marginBottom: '20px' }}>
            Personalized quests for your learning style: <strong>{learningStyle}</strong>
          </p>
          
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            {personalizedQuests.map(quest => (
              <div key={quest.id} style={{ 
                padding: '15px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '10px', 
                marginBottom: '15px',
                background: completedQuests.includes(quest.id) ? '#f0f9ff' : 'white'
              }}>
                <h3 style={{ margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {quest.title}
                  {completedQuests.includes(quest.id) && <span style={{ color: '#10b981' }}>✅</span>}
                </h3>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>{quest.description}</p>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#6b7280', 
                  marginBottom: '10px',
                  padding: '5px',
                  background: '#f8fafc',
                  borderRadius: '5px'
                }}>
                  <strong>Real-world use:</strong> {quest.practicalUse}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#8b6914', fontWeight: 'bold' }}>
                    ⭐ {quest.points} points
                  </span>
                  <button 
                    className="app-button" 
                    onClick={() => completeQuest(quest.id, quest.points)}
                    disabled={completedQuests.includes(quest.id)}
                    style={{ 
                      padding: '8px 16px',
                      opacity: completedQuests.includes(quest.id) ? 0.6 : 1
                    }}
                  >
                    {completedQuests.includes(quest.id) ? 'Completed' : 'Start Quest'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (page === 'team') {
      const teamChallenges = getTeamChallenges();
      
      return (
        <div className="app-card">
          <button className="app-button secondary-button" onClick={() => setPage('home')} style={{ marginBottom: '20px' }}>
            ← Back to Adventure Map
          </button>
          
          <h1 className="app-title">👥 Team Adventures</h1>
          <p className="app-text">
            Learn together! Join team challenges and achieve more as a group.
          </p>
          
          <div style={{ textAlign: 'left' }}>
            {teamChallenges.map(team => (
              <div key={team.id} style={{ 
                padding: '15px', 
                border: '1px solid #e5e7eb', 
                borderRadius: '10px', 
                marginBottom: '15px' 
              }}>
                <h3 style={{ margin: '0 0 5px 0' }}>{team.name}</h3>
                <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  👥 {team.members} members • ⭐ {team.totalPoints} points
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', color: '#1e40af', marginBottom: '5px' }}>
                    Current: {team.currentChallenge}
                  </div>
                  <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    background: '#e5e7eb', 
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${team.progress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #3b82f6, #1e40af)',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                  <div style={{ fontSize: '12px', textAlign: 'right', color: '#6b7280' }}>
                    {team.progress}% complete
                  </div>
                </div>
                <button className="app-button" style={{ padding: '8px 16px', width: '100%' }}>
                  Join Team Adventure
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (page === 'practical') {
      return (
        <div className="app-card">
          <button className="app-button secondary-button" onClick={() => setPage('home')} style={{ marginBottom: '20px' }}>
            ← Back to Adventure
          </button>
          
          <h1 className="app-title">💡 Why Learn This?</h1>
          <p className="app-text">
            Discover how classroom knowledge transforms into real-world superpowers!
          </p>
          
          <div style={{ textAlign: 'left' }}>
            <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '10px', marginBottom: '15px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#1e40af' }}>🔺 Mathematics</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
                <strong>Real use:</strong> Programming, engineering, finance, data analysis, game development
              </p>
              <div style={{ fontSize: '12px', color: '#10b981', fontStyle: 'italic' }}>
                "Algebra helps create video games, geometry builds bridges, calculus powers AI"
              </div>
            </div>
            
            <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '10px', marginBottom: '15px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#1e40af' }}>🔬 Science</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
                <strong>Real use:</strong> Medicine, technology, environmental solutions, innovation
              </p>
              <div style={{ fontSize: '12px', color: '#10b981', fontStyle: 'italic' }}>
                "Physics creates smartphones, chemistry develops medicines, biology understands life"
              </div>
            </div>
            
            <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '10px' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#1e40af' }}>🏛️ History & Languages</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
                <strong>Real use:</strong> Cultural understanding, communication, learning from past innovations
              </p>
              <div style={{ fontSize: '12px', color: '#10b981', fontStyle: 'italic' }}>
                "History shows patterns of success, languages connect global opportunities"
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="app-container">
      {renderContent()}

      {/* Reward Popup */}
      {showReward && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
            padding: '30px',
            borderRadius: '20px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            border: '3px solid #ffb700',
            boxShadow: '0 0 50px rgba(255, 215, 0, 0.5)'
          }}>
            <h1 style={{ color: '#8b6914', marginBottom: '20px' }}>🎉 EPIC ADVENTURE COMPLETE! 🎉</h1>
            
            <img 
              src={airpodsImage} 
              alt="AirPods Reward" 
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '15px',
                border: '3px solid #8b6914',
                marginBottom: '20px'
              }}
            />
            
            <h2 style={{ color: '#8b6914', marginBottom: '10px' }}>AirPods Pro Unlocked!</h2>
            <p style={{ color: '#8b6914', marginBottom: '20px' }}>
              You've mastered learning as an adventure! This is just the beginning of your knowledge journey.
            </p>
            
            <button 
              className="app-button" 
              onClick={() => setShowReward(false)}
              style={{ 
                background: '#8b6914',
                color: 'white',
                fontSize: '16px',
                padding: '12px 24px'
              }}
            >
              🎁 Claim Adventure Reward
            </button>
          </div>
        </div>
      )}
      
      {/* Watermark */}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        left: '0',
        right: '0',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '12px',
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(5px)'
      }}>
        <div style={{ marginBottom: '5px' }}>
          🚧 <strong>Demo Version</strong> - This is a prototype for DigiEduHack project
        </div>
        <div>
          UI/UX Design: <strong>Artjoms Solovjovs</strong> (71 School, 12b) | 
          Development: Džeki Team
        </div>
      </div>
    </div>
  );
}

export default App;