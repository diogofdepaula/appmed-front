import { ListItemButton, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ListaOpcoes = [
    {
        texto: 'Solicito encarecidamente auxílio no manejo ',
        remove: 'aux',
        trigger: '',
    },
    {
        texto: 'Segunda opção',
        remove: '',
        trigger: '',
    },
    {
        texto: 'Tereceira opção',
        remove: '',
        trigger: '',
    },
    {
        texto: 'Quarta opção',
        remove: '',
        trigger: '',
    },
]

export const SuperTips = ({ input, handleChangeTips, open }) => {

    // baseado nesse https://jh3y.medium.com/how-to-where-s-the-caret-getting-the-xy-position-of-the-caret-a24ba372990a
    const [tab, setTab] = useState(0)

    useEffect(() => {
        document.getElementById(tab.toString())?.focus()
    }, [tab, open])

    if (input === undefined) return <></>
    if (input.value === "") return <></>

    const {
        offsetTop: inputY,
        selectionStart: start
    } = input
    const div = document.createElement('div')
    const copyStyle = getComputedStyle(input)
    for (const prop of copyStyle) {
        div.style[prop] = copyStyle[prop]
    }
    const swap = '.'
    const inputValue = input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value
    const textContent = inputValue.substr(0, start)
    div.textContent = textContent
    if (input.tagName === 'TEXTAREA') div.style.height = 'auto'
    if (input.tagName === 'INPUT') div.style.width = 'auto'
    const span = document.createElement('span')
    span.textContent = inputValue.substr(start) || '.'
    div.appendChild(span)
    document.body.appendChild(div)
    const { offsetLeft: spanX, offsetTop: spanY } = span
    document.body.removeChild(div)
    const newLeft = (spanX + input.getBoundingClientRect().x)
    const newTop = (inputY + spanY - (input.getBoundingClientRect().y + 24))
    // 24 é o tamanho da linha acredito

    const handleClick = (param) => {
        handleChangeTips(param, start)
        setTab(0)
    }

    const handleKeyDown = param => (event) => {
        if (event.key === 'Enter') {
            handleChangeTips(param, start)
            setTab(0)
        }
        if (event.key === 'Escape') {
            handleChangeTips({
                texto: '',
                remove: '',
            })
            setTab(0)
        }
        if (event.key === 'ArrowDown') {
            const n = tab === (ListaOpcoes.length - 1) ? 0 : (tab + 1)
            setTab(n)
        }
        if (event.key === 'ArrowUp') {
            const n = tab === 0 ? (ListaOpcoes.length - 1) : (tab - 1)
            setTab(n)
        }
    }

    if (!open) return <></>

    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    zIndex: 'tooltip',
                    position: 'absolute',
                    top: `${newTop}px`,
                    left: `${newLeft}px`,
                    color: 'info.main',
                    mt: 2
                }}
            >
                {ListaOpcoes.map((x, i) =>
                    <ListItemButton
                        component="a"
                        dense
                        key={i}
                        id={i}
                        onClick={() => handleClick(x)}
                        onKeyDown={handleKeyDown(x)}
                        sx={{
                            '&:focus': {
                                bgcolor: "rgba(0, 0, 0, 0.05)",
                            },
                        }}
                    >
                        {x.texto}
                    </ListItemButton>
                )}
            </Paper>
        </>
    )
}