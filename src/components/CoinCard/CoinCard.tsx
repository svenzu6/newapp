import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@mui/material'
import millify from 'millify'
import * as React from 'react'

import type { CoinCardProps } from './CoinCard.types'

export const CoinCard: React.FunctionComponent<CoinCardProps> = (props) => {
    const { change, image, market_cap, name, price, rank } = props

    return (
        <Grid
            item={true}
            xs={3}
        >
            <Card
                sx={{ borderRadius: 3, maxWidth: 345 }}
                variant="outlined"
            >
                <CardActionArea>
                    <CardHeader
                        avatar={(
                            <Avatar
                                src={image}
                                sx={{ height: 24, width: 24 }}
                                variant="rounded"
                            />
                        )}
                        title={(
                            <Typography
                                variant="h5"
                            >
                                {rank}
                                .
                                {' '}
                                {name}
                            </Typography>
                        )}
                    />
                    <CardContent sx={{ padding: 3 }}>
                        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                color="text.primary"
                                variant="body2"
                            >
                                Price:
                                {millify(price)}
                                $
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            />
                            <Typography
                                color="text.primary"
                                variant="body2"
                            >
                                Market Cap:
                                {millify(market_cap)}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            />
                            <Typography
                                color="text.primary"
                                variant="body2"
                            >
                                Daily Change:
                                {millify(change)}
                                {' '}
                                %
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            />
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}