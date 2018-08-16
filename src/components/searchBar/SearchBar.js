import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing.unit,
    },
  });
  
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className={classes.container}>
            <Input
              defaultValue="Hello world"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            </div>
        )
    }
}

export default SearchBar