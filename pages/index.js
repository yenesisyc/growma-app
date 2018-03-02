import React from 'react'
import Head from 'next/head'
import pkg from '../package'

class Index extends React.Component {
  render() {
    return (
      <div className='Index'>
        <Head>
          <title>Welcome to {pkg.name}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>

        <div className='box'>
          <div className='welcome'>
            Welcome to {pkg.name}
          </div>
          <div className='sub'>
            This is the beginning of something awesome. We cannot wait to see what
            you will build with the help of our amazing developer community.
          </div>
        </div>

        <div className='channel'>{process.env.ENV_CHANNEL}</div>

        {/* language=CSS */}
        <style jsx>{`
          .Index {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #e8f0f0;
            font-family: "Helvetica Neue", Arial, sans-serif;
          }

          .box {
            width: 50%;
            text-align: center;
          }

          .welcome {
            font-size: 40px;
            color: #666;
          }

          .sub {
            font-size: 20px;
            color: #999;
          }

          .channel {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 6px;
            border-radius: 4px;
            background-color: orangered;
            color: white;
            font-size: 14px;
          }
        `}</style>

      </div>
    )
  }
}

export default Index
