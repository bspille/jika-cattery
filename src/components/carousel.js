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


export default (props) => {
   return (
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
              {props.tilesData.map((tile) => {
                return(
                      <GridTile
                          key={tile._id}
                          title={tile.title}
                          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                          titleStyle={styles.titleStyle}
                          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                      >
                        <img src={tile.imageUrl}/>
                      </GridTile>
                  )
              })}
          </GridList>
        </div>
    );
}
