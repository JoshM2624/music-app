import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Quality from './Quality';
import Mastervolume from './Mastervolume';
import Onlinemode from './Onlinemode';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	card: {
		margin: 30,
		maxwidth: 400,
		maxheight: 400
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	root: {
		flexGrow: 1
	}
});

export default function SimpleCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div className="rapper">
			{/* Online mode card */}
			<Card className={classes.card}>
				<CardContent>
					<h1>Online Mode</h1>
					<p>Is this application connected to the Internet?</p>
					<Onlinemode />
				</CardContent>
			</Card>

			{/* Master volume with slider*/}
			<Card className={classes.card}>
				<CardContent>
					<h1>Master Volume</h1>
					<p>Overides all other sound settings in this application</p>
					<Mastervolume />
				</CardContent>
			</Card>

			{/* Sound Quality card  with menu toggle*/}
			<Card className={classes.card}>
				<CardContent>
					<h1>Sound Quality</h1>
					<p>Manually control the music quality in event of poor connection</p>
					<Quality />
				</CardContent>
			</Card>
		</div>
	);
}
