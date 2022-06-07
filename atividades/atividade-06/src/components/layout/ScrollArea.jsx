import React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { styled } from '@stitches/react';

const ScrollArea = (props) => {
    const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
        height: '50vh',
        borderRadius: '7px',
        overflow: 'hidden',
    });

    const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
        width: '100%',
        height: '100%',
        borderRadius: 'inherit',
    });

    const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
        display: 'flex',
        // ensures no selection
        userSelect: 'none',
        // disable browser handling of all panning and zooming gestures on touch devices
        touchAction: 'none',
        padding: 2,
        background: '#3a3e41',
        transition: 'background 160ms ease-out',
        '&:hover': { background: '#575b5e' },
        '&[data-orientation="vertical"]': { width: props.size },
        '&[data-orientation="horizontal"]': {
            flexDirection: 'column',
            height: props.size,
        },
    });

    const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
        flex: 1,
        background: '#f8f9fa',
        borderRadius: props.size,
        // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
            minWidth: 22,
            minHeight: 22,
        },
    });

    const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
        background: '#0a8',
    });

    return (
        <StyledScrollArea>
            <StyledViewport>{props.children}</StyledViewport>
            <StyledScrollbar orientation="vertical">
                <StyledThumb />
            </StyledScrollbar>
            <StyledScrollbar orientation="horizontal">
                <StyledThumb />
            </StyledScrollbar>
            <StyledCorner />
        </StyledScrollArea>
    );
};

export default ScrollArea;
