import React, { useContext } from 'react';
import PrecricoesEditorAppBar from './prescricaoeditorappbar';
import PrescricoesMainAppBar from './prescricaomainappbar';
import LmesMainAppBar from './lmemainappbar';
import LmeEditorAppBar from './lmeeditorappbar';
import PrintMainAppBar from './printmainappbar'
import { AtendimentoContext } from '../../pages/atendimento';

const ThirdAppBar = () => {

   const { page } = useContext(AtendimentoContext)

   const GetAppBar = () => {

      switch (page) {
         case 'prescricoesmain':
            return <PrescricoesMainAppBar />
         case 'prescricaoinsert':
            return <PrecricoesEditorAppBar />
         case 'prescricaoupdate':
            return <PrecricoesEditorAppBar />
         // case 'prescricaodelete':
         //   return <PrescricaoDelete />
         case 'lmesmain':
            return <LmesMainAppBar />
         case 'lmeinsert':
            return <LmeEditorAppBar />
         case 'lmeupdate':
            return <LmeEditorAppBar />
         // case 'lmedelete':
         //    return <LMEDelete />

         // NÃO CONSEGUI PASSAR O useRef.current para o AppBar
         // então nesse caso optei por deixar o AppBar como Child
         // passando o handlePrint pelo props mesmo
         case 'print':
            return <PrintMainAppBar />
         case 'teste':
            return <div>Teste</div>
         default:
            return <div />
      }
   }
   return <GetAppBar />

}

export default ThirdAppBar