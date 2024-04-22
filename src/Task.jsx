function Task({
  name,
  description,
  id,
  status,
  removeTodo,
  editTodo,
  SetStatus,
}) {
  return (
    <>
      <div className="col-4">
        <div className="card bg-warning-subtle">
          <div className="card-body">
            <p>Name : {name}</p>
            <p>Description : {description}</p>
            <p>
              Status :
              <div className="btn-group">
                <button
                  type="button"
                  className={`btn ${
                    status ? "btn-success" : "btn-danger"
                  } dropdown-toggle`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {status ? "Completed" : "Notcompletd"}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => SetStatus(id, true)}
                    >
                      Completed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => SetStatus(id, false)}
                    >
                      Not Completed
                    </a>
                  </li>
                </ul>
              </div>
            </p>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-success form-check-inline"
                onClick={() => editTodo(name, description, id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger form-check-inline"
                onClick={() => removeTodo(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
