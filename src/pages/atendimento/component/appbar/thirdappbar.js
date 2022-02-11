import { Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import PrintMainAppBar from '../../../print/component/appbar/mainappbar';
import LmeEditorAppBar from '../../pages/lmes/components/appbar/editorappbar';
import LmesMainAppBar from '../../pages/lmes/components/appbar/mainappbar';
import PrecricoesEditorAppBar from '../../pages/prescricoes/components/appbar/editorappbar';
import PrescricoesMainAppBar from '../../pages/prescricoes/components/appbar/mainappbar';
// import LmeEditorAppBar from '../../pages/lmes/components/appbar/editorappbar';
// import LmesMainAppBar from '../../pages/lmes/components/appbar/mainappbar';
// import PrecricoesEditorAppBar from '../../pages/prescricoes/components/appbar/editorappbar';
// import PrescricoesMainAppBar from '../../pages/prescricoes/components/appbar/mainappbar';
// import PrintMainAppBar from '../../pages/print/component/appbar/mainappbar';

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
   return (
      <div>
         <GetAppBar />
         {page && <Divider />}
      </div>
   )

}

export default ThirdAppBar