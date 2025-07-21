import { Box, ListItemButton, Paper, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const ListaCurtas = (param) => {


    const listfiltred = [
        {
            texto: 'Ressonância de coluna cervical aponta ',
            remove: 'RNM CC',
            trigger: 'RNM CC',
        },
        {
            texto: 'Ressonância de coluna lombo-sacra aponta ',
            remove: 'RNM CLS',
            trigger: 'RNM CLS',
        },
        {
            texto: 'Ressonância de sacroilíacas aponta ',
            remove: 'RNM SI',
            trigger: 'RNM SI',
        },
        {
            texto: 'Tomografia de coluna cervical aponta ',
            remove: 'TC CC',
            trigger: 'TC CC',
        },
        {
            texto: 'Tomografia de coluna lombo-sacra aponta ',
            remove: 'RNM CLS',
            trigger: 'RNM CLS',
        },
        {
            texto: 'Ultrassonografia de ombro direito aponta ',
            remove: 'US OD',
            trigger: 'US OD',
        },
        {
            texto: 'Ultrassonografia de ombro esquerdo aponta ',
            remove: 'US OE',
            trigger: 'US OE',
        },
        {
            texto: 'Ultrassonografia de cotovelo direito aponta ',
            remove: 'US CD',
            trigger: 'US CD',
        },
        {
            texto: 'Ultrassonografia de cotovelo esquerdo aponta ',
            remove: 'US CE',
            trigger: 'US CE',
        },
        {
            texto: 'Ultrassonografia de punho direito aponta ',
            remove: 'US PhD',
            trigger: 'US PhD',
        },
        {
            texto: 'Ultrassonografia de punho esquerdo aponta ',
            remove: 'US PhE',
            trigger: 'US PhE',
        },
        {
            texto: 'Ultrassonografia de mão direita aponta ',
            remove: 'US MD',
            trigger: 'US MD',
        },
        {
            texto: 'Ultrassonografia de quadril direito aponta ',
            remove: 'US QD',
            trigger: 'US QD',
        },
        {
            texto: 'Ultrassonografia de quadril esquerdo aponta ',
            remove: 'US QE',
            trigger: 'US QE',
        },
        {
            texto: 'Ultrassonografia de joelho direito aponta ',
            remove: 'US JD',
            trigger: 'US JD',
        },
        {
            texto: 'Ultrassonografia de joelho esquerdo aponta ',
            remove: 'US JE',
            trigger: 'US JE',
        },
        {
            texto: 'Ultrassonografia de tornozelo direito aponta ',
            remove: 'US TD',
            trigger: 'US TD',
        },
        {
            texto: 'Ultrassonografia de tornozelo esquerdo aponta ',
            remove: 'US TE',
            trigger: 'US TE',
        },
        {
            texto: 'Ultrassonografia de pé direito aponta ',
            remove: 'US PeD',
            trigger: 'US PeD',
        },
        {
            texto: 'Ultrassonografia de pé esquerdo aponta ',
            remove: 'US PeE',
            trigger: 'US PeE',
        },

    ].filter(p => p.trigger === param)

    if (param === "") return []

    return listfiltred
}

const ListaOpcoes = (param) => {

    const list = [
        {
            texto: 'Solicito encarecidamente auxílio no manejo ',
            remove: 'aux',
            trigger: 'aux',
        },
        {
            texto: 'Além disso, oriento medidas não farmacológicas e de proteção articular, assim como ' + 
                   'medidas gerais em visando uma vida mais saudável as quais nessa situação ' + 
                   'são fundamentais considerando o comprometimento aricular e osteomuscular.',
            remove: 'med',
            trigger: 'med',
        },
        {
            texto: 'Aguardo os resultados dos novos exame para, então, definir conduta.',
            remove: 'aguardo',
            trigger: 'aguardo',
        },
        {
            texto: 'Aguardo os resultados dos novos exame para análise de hipóteses diagnósticas e então definir conduta.',
            remove: 'aguardo',
            trigger: 'aguardo',
        },
        {
            texto: "Alega piora das dores com esforço físico e pouca melhora ao repouso.",
            remove: 'piora',
            trigger: 'piora',
        },
        {
            texto:
                "intensificação das dores, "
                    .concat(
                        [
                            "com esforço físico",
                            "sobre as estruturas envolvidas"
                        ].sort(() => Math.random() - 0.5)
                            .join(', ')
                    ).concat(".")
                    .trim(),
            remove: 'piora',
            trigger: 'piora',
        },
        {
            texto:
                ""
                    .concat(
                        [
                            "não se tem expectativa de melhora",
                            "ao curto e mesmo ao médio prazo"
                        ].sort(() => Math.random() - 0.5)
                            .join(', ')
                    ).concat(".")
                    .trim(),
            remove: 'prog',
            trigger: 'prog',
        },
        {
            texto:
                ""
                    .concat(
                        [
                            "não é possível no momento de ser estabelecido " +
                            "considerando a variáveis indefinidas a serem " +
                            "esclarecidas pelos novos exames solicitados",
                        ].sort(() => Math.random() - 0.5)
                            .join(', ')
                    ).concat(".")
                    .trim(),
            remove: 'prog',
            trigger: 'prog',
        },
        {
            texto:
                ""
                    .concat(
                        [
                            "difíceis de serem estabelecidas uma vez " +
                            "que ainda há hipóteses diagnósticas para " +
                            "serem avaliadas",
                        ].sort(() => Math.random() - 0.5)
                            .join(', ')
                    ).concat(".")
                    .trim(),
            remove: 'prog',
            trigger: 'prog',
        },
        {
            texto: "Mesmo a longo prazo, caso não haja aderência " +
                "as medidas não farmacológicas e as orientações " +
                "de proteção articular, não se tem expectativa de melhora.",
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
            texto: "NÃO RECOMENDA-SE ARMAZENAMENTO DOMÉSTICO. DENTRO DO POSSÍVEL "
                + "ADMINISTRAR A MEDICAÇÃO NO DIA DA ENTREGA DA MEDICAÇÃO.",
            remove: 'med',
            trigger: 'med',
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

    //const trigger = textContent?.split(' ').pop()
    const doisultimos = textContent
        // trasnforma numa array    
        ?.split(' ')
        // separa os dois últimos
        .slice(-2)

    const trigger =
        doisultimos[0] === "RNM" ||
            doisultimos[0] === "TC" ||
            doisultimos[0] === "US"
            ? doisultimos.join(" ")
            : doisultimos.pop()

    // tudo isso para poder fazer duas palavras


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
                {ListaCurtas(trigger).map((x, i) =>
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