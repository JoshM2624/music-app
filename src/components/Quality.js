import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(2)
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

export default function ControlledOpenSelect() {
	const classes = useStyles();
	const [ quality, setQuality ] = React.useState('');
	const [ open, setOpen ] = React.useState(false);

	const handleChange = (event) => {
		setQuality(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	return (
		<form autoComplete="off">
			<Button className={classes.button} onClick={handleOpen} />
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="demo-controlled-open-select">Quality</InputLabel>
				<Select
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={quality}
					onChange={handleChange}
					inputProps={{
						name: 'age',
						id: 'demo-controlled-open-select'
					}}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Low</MenuItem>
					<MenuItem value={20}>Medium</MenuItem>
					<MenuItem value={30}>High</MenuItem>
				</Select>
			</FormControl>
		</form>
	);
}
