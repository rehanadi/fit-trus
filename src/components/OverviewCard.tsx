import { sarpanch } from "@/utils/fonts"
import Image from 'next/image'
import LinkCTA from './LinkCTA'
import type { StaticImport } from "next/dist/shared/lib/get-img-props"

type Props = {
  className?: string;
  image: string | StaticImport;
  imageOrder?: number;
  title: string;
  paragraph: string;
  isShowLink?: boolean;
}

const OverviewCard = ({ className = '', image, imageOrder = 1, title, paragraph, isShowLink = true }: Props) => {
  return (
    <div className={['overview-card row', className].join(' ')}>
      <div className={[
        "col col-12 col-lg-7", 
        imageOrder === 1 ? "order-1 order-lg-1" : "order-1 order-lg-2"
      ].join(' ')}>
        <figure>
          <Image
            src={image}
            alt="Trainer"
            loading='lazy'
          />
        </figure>
      </div>

      <div className={[
        "col col-12 col-lg-5 text-white d-flex flex-column row-gap-3 justify-content-center",
        imageOrder === 1 ? "order-2 order-lg-2 p-5 pe-lg-5" : "order-2 order-lg-1 p-5 ps-lg-5"
      ].join(' ')}>
        <h3 className={["sub-title", sarpanch.className].join(' ')}>
          {title}
        </h3>

        <p className='lead'>
          {paragraph}
        </p>

        {isShowLink && (
          <div className='mt-3 d-flex flex-wrap justify-content-start justify-content-lg-between align-items-center column-gap-5 row-gap-4'>
            <LinkCTA
              href='/services'
              className='text-white'
              text='Start Today'
            />
            
            <LinkCTA
              href='/services'
              className='text-white'
              text='View Schedule'
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default OverviewCard