import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Typography from '@mui/joy/Typography';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import React from "react";

interface AppBreadcrumbsInterface {
    moduleName: string
}

export default function AppBreadcrumbs({ moduleName }: AppBreadcrumbsInterface) {

    return (


        <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon />}
            sx={{ pl: 0 }}
        >
            <Link
                underline="none"
                color="neutral"
                href="#some-link"
                aria-label="Home"
            >
                <HomeRoundedIcon />
            </Link>
            <Link
                underline="hover"
                color="neutral"
                href="#some-link"
                sx={{ fontSize: 12, fontWeight: 500 }}
            >
                Dashboard
            </Link>
            <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
                {moduleName}
            </Typography>
        </Breadcrumbs>

    )

}