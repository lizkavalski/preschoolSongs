import {React,  useState } from 'react';
import { connect } from 'react-redux';
import { Button, Typography, ButtonGroup} from "@mui/material";
import { category, reset } from '../store/songs';


const Categories = (props) => {


  return (
    <div>
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.map(cat =>
          <Button
            key={cat._id}
            color="primary"
            onClick={() => props.category(cat.category)}
          >
            {cat.title || cat.category}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}
const mapStateToProps = state => ({
  categories: state.songs.category,
});

const mapDispatchToProps = { category ,reset };

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Categories);