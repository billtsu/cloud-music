import { IconStyle } from './assets/iconfont/iconfont';
import {GlobalStyle} from './style';
import { renderRoutes } from 'react-router-config'; // renderRoutes 读取路由配置转化为Router标签
import routes from './routes/index.js'; // renderRoutes这里只会渲染一层 // Home中的需要在Home中再次进行渲染
import { HashRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {/* <i className='iconfont'>&#xe62b;</i> */}
      { renderRoutes(routes)} 
    </HashRouter>
    </Provider>
  );
}

export default App;
