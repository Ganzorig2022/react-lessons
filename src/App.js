//import logo from './logo.svg';
// import './App.css';
//import CreateCell from './components/snake';

// const App = () => {
//   return (
//     <div className='App'>
//       {(function (rows, i, len) {
//         while (++i <= len) {
//           rows.push(<CreateCell key={i} />);
//         }
//         return rows;
//       })([], 0, 100)}
//     </div>
//   );
// };

//======================MISSION: WHITE CELL BOARD================
// const Comp = () => {
//   return (
//     <div
//       style={{ height: '50px', width: '50px', border: '1px solid black' }}
//     ></div>
//   );
// };

// const Board = ({ height, width }) => {
//   let board = new Array(height).fill(new Array(width).fill(0));
//   return (
//     <div style={{ height: '100vh', width: '100vw' }}>
//       {board.map((el) => (
//         <div style={{ display: 'flex', flexDirection: 'row' }}>
//           {el.map((el2, idx) => (
//             <Comp key={idx} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return <Board height={5} width={5} />;
// };

//=======================MISSION: CHESS BOARD===============
// const Box = ({ bg }) => (
//   <div
//     style={{
//       height: '50px',
//       width: '50px',
//       border: '1px solid black',
//       backgroundColor: bg,
//     }}
//   ></div>
// );

// const Board = ({ height, width }) => {
//   let board = new Array(height).fill(new Array(width).fill(0));
//   return (
//     <div style={{ height: '100vh', width: '100vw' }}>
//       {board.map((el, i) => (
//         <div style={{ display: 'flex', flexDirection: 'row' }}>
//           {el.map((el2, j) => (
//             <Box bg={!(i % 2 ^ j % 2) ? 'black' : 'white'} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return <Board height={10} width={10} />;
// };

//====================MISSION: TABLE DATA===========
// import './components/table.css';
// const data = [
//   { id: '1', firstName: 'Jon', lastName: 'Snow', age: 35 },
//   { id: '2', firstName: 'Cersei', lastName: 'Lannister', age: 42 },
//   { id: '3', firstName: 'Jaime', lastName: 'Lannister', age: 45 },
//   { id: '4', firstName: 'Arya', lastName: 'Stark', age: 16 },
//   { id: '5', firstName: 'Daenerys', lastName: 'Targaryen', age: 30 },
// ];

// const Table = ({ data }) => {
//   const divStyle = {
//     marginTop: '50px',
//     borderRadius: '20px',
//     border: '1px solid white',
//     padding: '20px',
//   };

//   return (
//     <div style={divStyle}>
//       <table>
//         <tr>
//           <th>ID</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Age</th>
//           <th>Full Name</th>
//         </tr>
//         {data.map((el, idx) => (
//           <tr key={idx}>
//             <td>{el.id}</td>
//             <td>{el.firstName}</td>
//             <td>{el.lastName}</td>
//             <td>{el.age}</td>
//             <td>{`${el.firstName}  ${el.lastName}`}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// };
// const App = () => {
//   return <Table data={data} />;
// };

//========================LESSON-2 State===========================
//=======================MISSION: COUNTER===============

// const App = () => {
//   //ahnnii utgaa (0) gej ogno. 100 gewel 100g ogno.
//   const [counter, setCounter] = useState(0);
//   //increase counter
//   const increase = () => setCounter(counter + 1);
//   return (
//     <div>
//       <p>You have clicked fucking {counter} times</p>
//       <button onClick={increase}>Click me</button>
//     </div>
//   );
// };

// import React, { useState } from 'react';

// import './App.css';

// function App() {
//   const pStyle = {
//     borderRadius: '10px',
//     border: '1px solid black',
//     padding: '10px',
//   };
//   const [enteredTodo, setEnteredTodo] = useState('');
//   const [todoArr, setTodoArr] = useState([]);
//   const [enteredSearch, setEnteredSearch] = useState('');
//   const [searchArr, setTodosearchArr] = useState([]);

//   const SubmitHandler = (event) => {
//     event.preventDefault();
//     if (enteredTodo !== '' && enteredTodo !== ' ') {
//       const todoData = {
//         task: enteredTodo,
//         id: Math.floor(Math.random().toFixed(2)),
//       };
//       setTodoArr([...todoArr, todoData]);
//       setEnteredTodo('');
//     }
//   };
//   const TodoInputHandler = (event) => {
//     setEnteredTodo(event.target.value);
//   };

//   const handleRemoveItem = (idx) => {
//     let newArr = todoArr.filter((todo, i) => idx !== i);
//     setTodoArr(newArr);
//   };
//   const TodoSearchInputHandler = (event) => {
//     setEnteredSearch(event.target.value);
//     let a = todoArr.filter((el, idx) =>
//       el.task.toLowerCase().includes(enteredSearch.toLowerCase())
//     );
//     console.log(a);
//     setTodosearchArr(a);
//     // setEnteredSearch('');
//   };

//   return (
//     <div>
//       {/* <header>
//       //   <h1>TODOLIST</h1>
//       // </header>
//       // <form onSubmit={SubmitHandler}>
//       //   <label>Todo title</label>
//       //   <input type='text' value={enteredTodo} onChange={TodoInputHandler} />
//       //   <button type='submit'>Add Todo List</button>
//       // </form>
//       // <div>
//       //   {todoArr.length > 0 &&
//       //     todoArr.map((el, idx) => {
//       //       return (
//       //         <p style={pStyle} key={idx} id={idx}>
//       //           Task {idx + 1 + ' '}: {el.task}
//       //           <button onClick={() => handleRemoveItem(idx)}>delete</button>
//       //         </p>
//       //       );
//       //     })}
//       // </div>
//       // <div>
//       //   <input
//       //     placeholder='Enter Post Title'
//       //     type='search'
//       //     value={enteredSearch}
//       //     onChange={TodoSearchInputHandler}
//       //   />
//       //   <ul>
//       //     {enteredSearch !== '' &&
//       //       searchArr.map((el, idx) => <li key={idx}>{el.task}</li>)}
//       //   </ul>
//       // </div>
//       //  */}
//     </div>
//   );
// }
// export default App;
// import CardComp from './CardComp';
// import { useState } from 'react';
// import { useDataContext } from './components/DataContext';

// const App = () => {
//   const [enteredSearch, setEnteredSearch] = useState('');
//   const { data } = useDataContext();

//   const searchInputHandler = (event) => {
//     setEnteredSearch(event.target.value);
//   };

//   return (
//     <div style={{ margin: '50px' }}>
//       <div
//         style={{
//           width: '400px',
//           margin: '0 auto',
//         }}
//       >
//         <input
//           type='text'
//           placeholder='enter search text'
//           value={enteredSearch}
//           onChange={searchInputHandler}
//         />
//       </div>
//       <div style={{ margin: '50px', display: 'flex' }}>
//         {data.map((dat, i) => {
//           if (
//             dat.name.toLowerCase().includes(enteredSearch) ||
//             dat.profession.toLowerCase().includes(enteredSearch)
//           )
//             return <CardComp key={i} data={dat} id={i} />;
//         })}
//       </div>
//     </div>
//   );
// };
// export default App;

// import { useState } from 'react';

// const App = () => {
//   const [inputText, setInputText] = useState({});

//   const inputChangeHandler = (event) => {
//     const { name, value } = event.target;

//     setInputText({
//       ...inputText,
//       [name]: value,
//     });
//   };
//   const submitHandler = (event) => {
//     // event.preventDefault();
//     if (inputText.pass1 === inputText.pass2)
//       return alert('Both password matches');

//     if (/\S+@\S+\.\S+/.test(inputText.email)) return alert('email is valid!');

//     setInputText({});
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type='text'
//           placeholder='text1'
//           value={inputText.text1}
//           name='text1'
//           onChange={inputChangeHandler}
//         />
//         <input
//           type='password'
//           placeholder='pass1'
//           value={inputText.pass1}
//           name='pass1'
//           onChange={inputChangeHandler}
//         />
//         <input
//           type='password'
//           placeholder='pass2'
//           value={inputText.pass2}
//           name='pass2'
//           onChange={inputChangeHandler}
//         />
//         <input
//           type='email'
//           placeholder='enter email'
//           value={inputText.email}
//           name='email'
//           onChange={inputChangeHandler}
//         />
//         <button type='submit'>Print result</button>
//       </form>
//     </div>
//   );
// };
// export default App;

// ======================GIPHY SEARCH MISSION==============
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import styles from './components/giph.module.css';

// const App = () => {
//   const [enteredSearch, setEnteredSearch] = useState('');
//   const [getSearch, setGetSearch] = useState('');
//   const [giphData, setGiphData] = useState([]);
//   const [loading, setLoading] = useState();

//   useEffect(() => {
//     if (getSearch !== '') {
//       getGiphDataFromAPI();
//       setLoading(true);
//     }
//   }, [getSearch]);

//   const searchHandler = (event) => {
//     setEnteredSearch(event.target.value);
//   };

//   const getGiphResult = () => {
//     setGetSearch(enteredSearch);
//     // setEnteredSearch('');
//   };

//   const getGiphDataFromAPI = async () => {
//     try {
//       const data = await axios.get(
//         `https://api.giphy.com/v1/gifs/search?api_key=NptZhhwltiR6lI9tdXlwA40mvrAPW064&q=${getSearch})`
//       );
//       setLoading(false);
//       setGiphData([...data.data.data]);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className={styles.mainWrapper}>
//       <div className={styles.searchArea}>
//         <h2 htmlFor=''>GIPHY IMAGE SEARCH by GANZO</h2>
//         <input
//           type='text'
//           value={enteredSearch}
//           placeholder='please enter your search text'
//           onChange={searchHandler}
//         />
//         <button onClick={getGiphResult}>Search</button>
//       </div>
//       <div className={styles.imageContainer}>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           giphData.map((data, idx) => {
//             return (
//               <div className={styles.img} key={idx}>
//                 <img key={idx} src={data.images.original.url} />
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// import { useState } from 'react';
// import { useEffect } from 'react';
// import './components/snake.css';

// const App = () => {
//   const [snakeLoc, setSnakeLoc] = useState({ row: 5, col: 5 });
//   const [keyCode, setCode] = useState('');

//   const board = new Array(10).fill(new Array(10).fill(''));

//   useEffect(() => {
//     const keyHandler = (event) => {
//       const code = event.keyCode;
//       // if (event.keyCode == 119) {
//       //   setCode(event.keyCode)
//       //   setSnakeLoc({ ...snakeLoc, row: snakeLoc.row-- });
//       // }
//       // //DOWN
//       // if (event.keyCode == 100) {
//       //   setSnakeLoc({ ...snakeLoc, col: snakeLoc.col++ });
//       // }
//       // //RIGHT
//       // if (event.keyCode == 115) {
//       //   setSnakeLoc({ ...snakeLoc, row: snakeLoc.row++ });
//       // }
//       // //LEFT
//       // if (event.keyCode == 97) {
//       //   setSnakeLoc({ ...snakeLoc, col: snakeLoc.col-- });
//       // }
//       setCode(code);
//     };
//     window.addEventListener('keypress', keyHandler);
//     //UP

//     // w == 119;
//     // d == 100;
//     // s == 115;
//     // a == 97;

//     return () => {
//       window.removeEventListener('keypress', keyHandler);
//     };
//   }, []);

//   useEffect(() => {
//     // if (event.keyCode == 119) {
//     //   setCode(event.keyCode)
//     //   setSnakeLoc({ ...snakeLoc, row: snakeLoc.row-- });
//     // }
//     // //DOWN
//     // if (event.keyCode == 100) {
//     //   setSnakeLoc({ ...snakeLoc, col: snakeLoc.col++ });
//     // }
//     // //RIGHT
//     // if (event.keyCode == 115) {
//     //   setSnakeLoc({ ...snakeLoc, row: snakeLoc.row++ });
//     // }
//     // //LEFT
//     // if (event.keyCode == 97) {
//     //   setSnakeLoc({ ...snakeLoc, col: snakeLoc.col-- });
//     // }
//   }, [code]);
//   console.log(snakeLoc);

//   return (
//     <div
//       style={{
//         height: '500px',
//         width: '500px',
//       }}
//     >
//       {board.map((row, i) => {
//         return (
//           <div
//             key={i}
//             style={{
//               display: 'flex',
//               height: '50px',
//               border: '1px solid',
//             }}
//           >
//             {row.map((col, j) => {
//               return (
//                 <div
//                   key={j}
//                   style={{
//                     width: '50px',
//                     height: '50px',
//                     border: '1px solid',
//                   }}
//                   col={j + 1}
//                   row={i + 1}
//                   className={
//                     snakeLoc.col == j + 1 && snakeLoc.row == i + 1
//                       ? 'black'
//                       : 'white'
//                   }
//                 >
//                   {j + 1}
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default App;
// import { useRef } from 'react';
// import { toast } from 'react-toastify';

//===================MISSION - STOPWATCH====================
// import { useState, useEffect } from 'react';

// const App = () => {
//   const [start, setStart] = useState(false);
//   const [time, setTime] = useState(0);
//   let interval = null;

//   useEffect(() => {
//     if (start) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime + 10);
//       }, 10);
//       return () => clearInterval(interval);
//     }
//   }, [start]);

//   const onStart = () => {
//     setStart(true);
//   };
//   const onPause = () => {
//     setStart(false);
//   };
//   const onReset = () => {
//     setTime(0);
//   };
//   console.log(start);
//   return (
//     <div>
//       <h3>STOPWATCH</h3>
//       <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
//       <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
//       <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
//       <br />
//       <button onClick={onStart}>START</button>
//       <button onClick={onPause}>PAUSE</button>
//       <button onClick={onReset}>RESET</button>
//     </div>
//   );
// };

// export default App;

//==================LESSON - useReducer()=======================
// import { useState, useEffect, useReducer } from 'react';

// const App = () => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'start':
//         return { ...state, start: true };
//       case 'stop':
//         return { ...state, start: false };
//       case 'reset':
//         return { start: false, time: 0 };
//       default:
//         return { ...state, time: state.time + 10 };
//     }
//   };
//   const initialState = {
//     start: false,
//     time: 0,
//   };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (state.start) {
//       let interval = setInterval(() => {
//         dispatch(state.time + 10);
//       }, 10);
//       return () => clearInterval(interval);
//     }
//   }, [state.start]);

//   return (
//     <div>
//       <h3>STOPWATCH</h3>
//       <span>{('0' + Math.floor((state.time / 60000) % 60)).slice(-2)}:</span>
//       <span>{('0' + Math.floor((state.time / 1000) % 60)).slice(-2)}:</span>
//       <span>{('0' + Math.floor((state.time / 10) % 100)).slice(-2)}</span>
//       <br />
//       <button onClick={() => dispatch({ type: 'start' })}>START</button>
//       <button onClick={() => dispatch({ type: 'stop' })}>PAUSE</button>
//       <button onClick={() => dispatch({ type: 'reset' })}>RESET</button>
//     </div>
//   );
// };

// export default App;

//==================LESSON - useMemo()=======================
//==================MATERIAL UI=============================
import * as React from 'react';
import { useState, useEffect, useReducer, useMemo, useRef } from 'react';
import {
  Button,
  Input,
  Box,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Menu,
} from '@mui/material';

// import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import OutputIcon from '@mui/icons-material/Output';
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const App = () => {
  const [number, setNumber] = useState(0);
  const [prime, setPrime] = useState([]);
  const inputRef = useRef(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'start':
        return { ...state, start: true };
      case 'stop':
        return { ...state, start: false };
      case 'reset':
        return { start: false, time: 0 };
      default:
        return { ...state, time: state.time + 10 };
    }
  };
  const initialState = {
    start: false,
    time: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.start) {
      let interval = setInterval(() => {
        dispatch(state.time + 10);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [state.start]);

  // memoization
  const primeCheck = (number) => {
    let arr = [];
    for (let i = 2; i <= number; i++) {
      let isPrime = true;

      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (i > 1 && isPrime) {
        arr.push(i);
      }
    }
    return arr;
  };

  const memoizedValue = useMemo(() => {
    return primeCheck(number);
  }, [number]);

  const styles = {
    Box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      margin: '0 auto',
    },
    button3: {
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: 'red',
      },
      color: 'white',
    },
    input: {
      border: '1px solid black',
      borderRadius: '5px',
    },
    margin20: {
      margin: '20px',
    },
  };
  return (
    <Box sx={styles.Box}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon>
              <PopupState variant='popover' popupId='demo-popup-menu'>
                {(popupState) => (
                  <React.Fragment>
                    <Button variant='contained' {...bindTrigger(popupState)}>
                      Dashboard
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </MenuIcon>
          </IconButton>
          <Typography>Timer and Prime Number Project</Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <h3>STOPWATCH</h3>
      <span>{('0' + Math.floor((state.time / 60000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((state.time / 1000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((state.time / 10) % 100)).slice(-2)}</span>
      <br />
      <Box margin='20px'>
        <Button
          color='error'
          variant='contained'
          sx={styles.margin20}
          onClick={() => dispatch({ type: 'start' })}
        >
          START
          <PlayCircleFilledWhiteIcon />
        </Button>
        <Button
          variant='contained'
          sx={styles.margin20}
          onClick={() => dispatch({ type: 'stop' })}
        >
          PAUSE
          <PauseIcon />
        </Button>
        <Button
          variant='contained'
          sx={styles.margin20}
          onClick={() => dispatch({ type: 'reset' })}
        >
          RESET
          <RestartAltIcon />
        </Button>
      </Box>
      <TextField
        type='number'
        ref={inputRef}
        sx={(styles.input, styles.margin20)}
        placeholder='please enter your number'
      />
      <Button
        color='success'
        variant='outlined'
        size='large'
        sx={styles.button3}
        onClick={() => setNumber(inputRef.current.value)}
      >
        Print prime number
        <OutputIcon />
      </Button>
      <span>{memoizedValue.join(',')}</span>
      <div>Total prime number is: {memoizedValue.length}</div>
    </Box>
  );
};

export default App;
