import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">
            欢迎来到 <span className="highlight">MCP TESTING</span>
          </h1>
          <p className="subtitle">
            基于 React + TypeScript 构建的现代化Web应用
          </p>
        </header>

        <div className="content">
          <div className="card">
            <h2>🚀 项目特点</h2>
            <ul className="features">
              <li>⚡ Vite 构建工具，快速开发</li>
              <li>⚛️ React 18 + TypeScript 支持</li>
              <li>🎨 现代化UI设计</li>
              <li>📱 响应式布局</li>
              <li>🔧 完整的开发环境配置</li>
            </ul>
          </div>

          <div className="card">
            <h2>🎯 快速开始</h2>
            <div className="code-block">
              <code>
                # 安装依赖<br/>
                npm install<br/><br/>
                # 启动开发服务器<br/>
                npm run dev<br/><br/>
                # 构建生产版本<br/>
                npm run build
              </code>
            </div>
          </div>

          <div className="card interactive-card">
            <h2>🎮 交互示例</h2>
            <p>点击按钮测试React状态管理：</p>
            <button 
              className="counter-btn" 
              onClick={() => setCount((count) => count + 1)}
            >
              点击次数: {count}
            </button>
          </div>
        </div>

        <footer className="footer">
          <p>
            🛠️ 使用 <a href="https://vitejs.dev" target="_blank">Vite</a> + 
            <a href="https://react.dev" target="_blank">React</a> + 
            <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a> 构建
          </p>
          <p className="author">Created with ❤️ by Claude</p>
        </footer>
      </div>
    </div>
  )
}

export default App