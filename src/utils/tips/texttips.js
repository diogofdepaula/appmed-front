import { Box, TextField, Paper, ListItemButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const ListaOpcoes = (param) => {
    const list = [
        {
            texto: 'Solicito encarecidamente auxílio no manejo ',
            remove: 'aux',
            trigger: 'aux',
        },
        {
            texto: 'Além disso, medidas não farmacológicas e de proteção articular.',
            remove: 'med',
            trigger: 'med',
        },
        {
            texto: 'Aguardo os resultados dos novos exames para avaliar possível comorbidades e então definir conduta.',
            remove: 'aguardo',
            trigger: 'aguardo',
        },
        {
            texto: "intensificação das dores com esforço físico sobre as estruturas envolvidas",
            remove: 'piora',
            trigger: 'piora',
        },
        {
            texto: "não se vislumbra melhora a curto e médio prazo de melhora o quadro.",
            remove: 'prog',
            trigger: 'prog',
        },
        {
            texto: "Mesmo a longo prazo, caso não haja aderência " +
                "as medidas não farmacológicas, não se tem expectativa de melhora.",
            remove: 'prog',
            trigger: 'prog',
        },
        {
            texto: "Além disso, observa-se que problemas relacionados ao eixo IV da antiga "
                + "abordagem Multiaxial influenciam negativamente tanto eixo I como eixo III.",
            remove: 'eixo',
            trigger: 'eixo',
        },
        {
            texto:
                "alodinia, mialgia, "
                    .concat(
                        [
                            'fadiga', 'sono não reparador',
                            'problemas com memória', 'insônia'
                        ].sort(() => Math.random() - 0.5)
                            .join(', ')
                    ).concat(", ")
                    .concat(
                        [
                            'ansiedade', 'nervosismo',
                            'irritabilidade', 'apreensão', 'melancolia', 'anedonia'
                        ].sort(() => Math.random() - 0.5)
                            .join(', ')
                    ).concat(", ")
                    .concat(
                        'entretanto, mantendo cuidados de higiene e aparência.'
                    )
                    .trim()
            ,
            remove: 'fmg',
            trigger: 'fmg',
        },
    ]

    if (param === "") return list

    const listfiltred = list.filter(p => p.trigger === param)

    return listfiltred
}

const SuperTips = ({ input, handleChangeTips, open }) => {

    // baseado nesse https://jh3y.medium.com/how-to-where-s-the-caret-getting-the-xy-position-of-the-caret-a24ba372990a
    const [tab, setTab] = useState(0)
    const refSpanYBounding = useRef(0)

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
    const {
        offsetLeft: spanX,
        offsetTop: spanY,
    } = span
    // não sei porque, mas tem que subtrair o valor inicial do spanY
    // ou seja, tem que somar e depois subtrair o valor. o resultado
    // é o mesmo valor de valor da linha (lineHeight) vezes o número de
    // linhas (paragrafos / nova linhas) do texto
    // deixar aqui antes de ser removido
    refSpanYBounding.current = refSpanYBounding.current === 0 ? span.getBoundingClientRect().y : refSpanYBounding.current
    document.body.removeChild(div)
    const newLeft = (spanX + input.getBoundingClientRect().x)

    const newTop =
        input.getBoundingClientRect().y
        + document.documentElement.scrollTop
        + inputY / 3 // o /3 foi para dar ajuste, mas esse é um valor constante.
        + spanY // vai mudando (aumentando) conforme adiciona-se uma nova linha no texto 
        - refSpanYBounding.current

    // console.log('newTop :>> ', newTop);
    // console.log('refSpanYBounding ', refSpanYBounding.current);
    // console.log('inputY :>> ', inputY);
    // console.log('spanY :>> ', spanY);
    // console.log('correção :>> ', "40");
    // console.log('input.getBoundingClientRect() :>> ', input.getBoundingClientRect());
    // console.log('document.documentElement.scrollTop :>> ', document.documentElement.scrollTop);
    // console.log('offsetTop :>> ', offsetTop);
    // console.log('offsetHeight :>> ', offsetHeight);
    // console.log('lineHeight :>> ', window
    // .getComputedStyle(input, null)
    // .getPropertyValue("line-height"));

    //   const newTop = Math.min(
    //     y - scrollTop,
    //     (offsetTop + offsetHeight) - parseInt(lineHeight, 10)
    //   )

    const trigger = textContent?.split(' ').pop()

    const handleClick = (param) => {
        handleChangeTips(param, start, trigger)
        setTab(0)
    }

    const handleKeyDown = param => (event) => {
        if (event.key === 'Enter') {
            handleChangeTips(param, start, trigger)
            setTab(0)
        }
        if (event.key === 'Escape') {
            handleChangeTips({
                texto: '',
                trigger: trigger,
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
                {ListaOpcoes(trigger).map((x, i) =>
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

export const TextTips = ({ handleChange, state, name, rows, label }) => {

    const [open, setOpen] = useState(false)
    const ref = useRef()

    const handleKeyDown = (event) => {
        if (event.key === 'F9') {
            setOpen(true)
        }
        if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    const handleChangeTips = (param, start, trigger) => {

        const texto = state[name]
            // separa o que tem antes
            .slice(0,
                (
                    trigger === ''
                        ? start
                        : (start - param.trigger.length)
                )
            )
            // adiciona o texto selecionado
            .concat(param.texto)
            // uni com o que vem depois.
            .concat(state[name].slice(start))

        // nesse formato envia o texto inteiro para só inserir na TextField
        handleChange(undefined, texto, name)
        setOpen(false)
        ref.current.focus()
    }

    // modelo de Invocação e hangleChange
    //       <TextTips
    //        handleChange={handleChangeText}
    //        // é o estado que será alterado
    //        state={emBranco}
    //        // nome (Object.key) do estado que será alterado
    //        name='texto'
    //        label="Texto"
    //        rows={15}
    //        /> 

    // const handleChangeText = (event, tips, name) => {
    //     tem que ficar no local que chama o TextTips
    //     por causa das adaptações da mudanda do Objeto.
    //     setEmBranco({
    //         ...emBranco,
    //         [event?.target.name ?? name] : event?.target.value ?? tips
    //     })
    // }

    return (
        <>
            <Box>
                <SuperTips
                    input={ref.current}
                    open={open}
                    handleChangeTips={handleChangeTips}
                />
                <TextField
                    inputRef={ref}
                    fullWidth
                    multiline
                    rows={rows}
                    variant='outlined'
                    name={name}
                    value={state[name]}
                    label={label}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </Box>
        </>
    )
}

export default TextTips