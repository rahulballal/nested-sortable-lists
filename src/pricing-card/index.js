import React from 'react'
import { Card, CardTitle, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { ParentList } from './list'

export const PricingCardTemplate = props => (
    <Card>
        <CardTitle>Pricing</CardTitle>
        <div>{props.pricingCardBody}</div>
        <CardActions>
            <Button label="Add Items" />
        </CardActions>
    </Card>
)

export const PricingCard = props => <PricingCardTemplate pricingCardBody={<ParentList />} />





