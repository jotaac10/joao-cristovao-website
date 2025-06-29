import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='HTML' />
          <SkillList src={checkMarkIcon} skill='CSS' />
          <SkillList src={checkMarkIcon} skill='JavaScript' />
          <SkillList src={checkMarkIcon} skill='React' />
          <SkillList src={checkMarkIcon} skill='Bootstrap' />
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Unity' />
          <SkillList src={checkMarkIcon} skill='C++' />
          <SkillList src={checkMarkIcon} skill='Blender'/>
          <SkillList src={checkMarkIcon} skill='Python'/>
        </div>
        <hr />
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill='Photoshop' />
          <SkillList src={checkMarkIcon} skill='Adobe Premier' />
          <SkillList src={checkMarkIcon} skill='OBS Studio' />
        </div>
    </section>
  )
}

export default Skills