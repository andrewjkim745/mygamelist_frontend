import React from 'react'
import '../styles/PostForm.css'




const UpdateForm = (props) => {
    return (


        <div className="column-form-background">
        <h3>Update</h3>
        <form className="column-auth-form" onSubmit={props.onSubmit}>
          <input
            required
            type="text"
            name="title"
            value={props.title}
            placeholder="Title"
            onChange={props.onChange}
          />
          <input
            required
            name="genre"
            value={props.genre}
            type="text"
            placeholder="Genre"
            onChange={props.onChange}
          />
          <input
            required
            name="image"
            value={props.image}
            type="text"
            placeholder="Image"
            onChange={props.onChange}
            />
           <input
            required
            name="description"
            value={props.description}
            type="text"
            placeholder="Description"
            onChange={props.onChange}
            />
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
}

export default UpdateForm