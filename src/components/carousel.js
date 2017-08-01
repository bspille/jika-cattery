import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'https://lorempixel.com/250/250/nature/1',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/2',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/3',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/4',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/5',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/6',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/7',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://lorempixel.com/250/250/nature/8',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
export default () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

