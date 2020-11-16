import React from 'react'
import './home.css'
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import history from '../../History'
import {
  createTask,

  deleteTask,

} from '../../Redux/Action';
function Home(props) {
  const { todoList, createTask, deleteTask } = props;
  let date = new Date();
  let resulf = date.getDate() + "-" + (date.getMonth() + 1) + "-" + (date.getFullYear()) + " " + (date.getHours()) + ":" + (date.getMinutes()) + ":" + (date.getSeconds())
  console.log("TCL: Home -> resulf", resulf)

  function handelDelete(id) {
    deleteTask({ id: id })
  }
  function renderItem() {
    return todoList.map((itemTodo, todoIndex) => {
      return (
        <>
          <div key={todoIndex}
            className="item">
            <p >{itemTodo.tittle}</p>

            <div>
              <p className="text-right">{resulf}</p>
              <div className="d-flex">
                <p  onClick={() => history.push(`/detail/${itemTodo.id}`)}>(Show Detail)</p>
                <p onClick={() => handelDelete(itemTodo.id)}>(Remove Note)</p>
              </div>
            </div>
          </div>

        </>
      )
    })
  }
  return (
    <>
      <div className="home">
        <div className="todolist">
          <div>
            <h2 className="text-center">Todolist</h2>
            <Formik
              initialValues={{ tittle: '', note: '' }}
              validationSchema={Yup.object({
                tittle: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                note: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .required('Required'),

              })}
              onSubmit={(values) => {
                console.log("TCL: Home -> values", values)
                createTask({
                  id: Math.floor(Math.random() * 100),
                  tittle: values.tittle,
                  note: values.note
                })
              }}
            >
              <Form>
                <Field name="tittle" type="text"
                  className="form-control mb-3"
                  placeholder="tittle"
                />
                <div className="text-danger">
                  <ErrorMessage name="tittle" />
                </div>
                <Field name="note" type="text"
                  className="form-control mb-3"
                  placeholder="note" />
                <div className="text-danger">
                  <ErrorMessage name="note" />
                </div>
                <button type="submit">Add Task</button>
              </Form>
            </Formik>
          </div>
          <div>
            {renderItem()}
          </div>
        </div>

      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log('Log: mapStateToProps -> state', state);
  const { todoList } = state.todoListReducer;
  return {
    todoList,

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (params) => dispatch(createTask(params)),
    deleteTask: (params) => dispatch(deleteTask(params)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
