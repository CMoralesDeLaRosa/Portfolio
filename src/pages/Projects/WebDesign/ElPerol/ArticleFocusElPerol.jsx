import './ElPerol.css'
import { IoBulb } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa'
import { TbExchange } from 'react-icons/tb'
import { BsPersonArmsUp } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { AiFillThunderbolt } from 'react-icons/ai'

const ArticleFocusElPerol = ({ project }) => {
  return (
    <article className='article-focus-el-perol flex-container'>
      <div className='div-scheme-el-perol'>
        <IoBulb className='big-icon-scheme-el-perol' />
        <FaPlus className='small-icon-scheme-el-perol' />
        <TbExchange className='big-icon-scheme-el-perol' />
        <FaPlus className='small-icon-scheme-el-perol' />
        <BsPersonArmsUp className='big-icon-scheme-el-perol' />
        <FaLongArrowAltRight className='small-icon-scheme-el-perol' />
        <AiFillThunderbolt className='big-icon-scheme-el-perol' />
      </div>
      <p>{project.focus}</p>
      <div className='div-images-focus-el-perol flex-container'>
        <div>
          <img src={project.imgFocus1} alt='Web site El Perol' />
        </div>
        <div>
          <img src={project.imgFocus2} alt='Web site El Perol' />
        </div>
      </div>
    </article>
  )
}

export default ArticleFocusElPerol
