import { Flex } from '@chakra-ui/react';
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Flex flexDir="column" alignItems="center" mt="20">
        <Carousel title="Test">
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 1
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 2
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 3
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 4
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 5
          </div>
          <div
            style={{ backgroundColor: 'gray', width: '200px', height: '200px' }}
          >
            Test 6
          </div>
        </Carousel>
      </Flex>
    </div>
  );
}

export default App;
