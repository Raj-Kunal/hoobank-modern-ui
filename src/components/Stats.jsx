import { stats } from "../constants"
import styles from "../style"


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => {
        return (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className="font-poppins font-semibold text-[30px] sm:text-[40px] leading-[43px] xs:leading-[53px] text-white">{stat.value}</h4>
            <p className="font-poppins font-normal text-[15px] sm:text-[20px] leading-[21px] xs:leading-[26px] text-gradient">{stat.title}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats
