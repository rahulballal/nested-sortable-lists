import React from 'react'
import {
    SortableContainer, SortableElement, arrayMove
} from 'react-sortable-hoc'
import map from 'ramda/es/map'

const ListItemContainer = SortableElement((props) => (<li>{props.listItem}</li>))
const ListContainer = SortableContainer((props) => (<ul>{map((listItem, idx) => <ListItemContainer listItem={listItem} />, props.listItems)}</ul>))

const ListItem = props => (
    <div style={props.css}>
        <span>{props.name}</span>
    </div>
)
const BlueListItem = props => <ListItem css={{ color: 'blue' }} {...props} />

export const ParentList = props => {
    const [parentItems, setParentItems] = React.useState(props.parentItems)
    const listItems = map((item, idx) => <ListItem key={`parent_${idx}`} css={{}} name={item.name} />, parentItems)

    const onSortEnd = ({ oldIndex, newIndex }) => setParentItems(arrayMove(parentItems, oldIndex, newIndex))

    return <ListContainer listItems={listItems} onSortEnd={onSortEnd} />
}

ParentList.defaultProps = {
    parentItems: [
        { name: 'Visa Credit Card' },
        { name: 'Amex Credit Card' },
        { name: 'Mastercard' },
        { name: 'Discover Card' }
    ]
}

