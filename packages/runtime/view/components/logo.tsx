import { FC } from 'react';

interface LogoProps {
  className?: string;
  color?: 'default' | 'light';
  width?: number;
  height?: number;
}

export const Logo: FC<LogoProps> = ({
  color = 'default',
  width,
  height,
  className,
}) => {
  const fill = color === 'default' ? '#00bbff' : '#fff';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={width}
      height={height}
      className={className}
    >
      <path
        d="M560 300L560 116L120 116L292 640L72 300L0 55L640 55L640 361L308 361L282 300L560 301L560 300Z"
        fill={fill}
      />
    </svg>
  );
};

interface LogoTextProps {
  className?: string;
}

export const LogoText: FC<LogoTextProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 284.148 24.372"
      className={className}
    >
      <path
        d="M277.812 13.536v-1.728h6.228l-.036 10.116q-3.024 2.16-6.768 2.16a27.144 27.144 0 01-1.49-.038q-.704-.039-1.318-.117a13.95 13.95 0 01-.54-.079 8.678 8.678 0 01-2.258-.713 10.114 10.114 0 01-.514-.259q-1.368-.738-2.196-2.034a9.261 9.261 0 01-1.066-2.317q-.725-2.3-.798-5.666a35.371 35.371 0 01-.008-.765Q267.048 0 277.74 0q1.091 0 2.498.207a28.223 28.223 0 01.832.135 24.573 24.573 0 011.128.226q.579.131 1.067.277a9.91 9.91 0 01.883.307l-.648 1.872q-2.556-.792-5.76-.792-4.338 0-6.163 1.917a4.411 4.411 0 00-.245.279q-1.764 2.196-1.764 7.632a26.223 26.223 0 00.127 2.684q.279 2.704 1.176 4.261a4.569 4.569 0 001.001 1.227 7.245 7.245 0 001.092.769 5.403 5.403 0 001.266.527 8.358 8.358 0 00.983.198q.551.079 1.187.108a17.149 17.149 0 00.8.018 12.306 12.306 0 001.778-.12q.893-.131 1.626-.403a5.54 5.54 0 001.168-.593v-7.2h-3.96zm-99.072-2.88V.432h2.376V23.76h-2.376V12.672h-11.16V23.76h-2.376V.432h2.376v10.224h11.16zm-99.36 5.76V.432h2.412v15.984a8.4 8.4 0 00.316 2.237q1.018 3.415 5.3 3.415a6.587 6.587 0 001.865-.252 5.256 5.256 0 002.023-1.116 4.312 4.312 0 001.262-2.017q.215-.699.268-1.543a9.153 9.153 0 00.018-.58V.432h2.34l-.036 16.056q0 6.06-4.88 7.309a11.566 11.566 0 01-2.86.323h-.504q-.432 0-.864-.018a6.189 6.189 0 01-.245-.015q-.412-.034-1.087-.129a7.659 7.659 0 01-.634-.114q-.495-.113-.878-.282a5.219 5.219 0 01-.482-.245q-.249-.143-.521-.328a11.035 11.035 0 01-.383-.273q-.774-.576-1.242-1.368a7.328 7.328 0 01-.872-2.11q-.234-.937-.295-2.037a14.305 14.305 0 01-.021-.785zm56.304 5.328v2.016h-13.248V.432h12.852l-.252 2.016h-10.188v8.244h9v2.016h-9.036v9.036h10.872zm65.232 0v2.016h-13.248V.432h12.852l-.252 2.016H190.08v8.244h9v2.016h-9.036v9.036h10.872zM108.9 14.652h-1.116l-2.16-.036h-1.656v9.144h-2.412V.432h6.84a25.981 25.981 0 011.348.033q.654.034 1.218.104a12.277 12.277 0 01.656.097q1.314.234 2.538.918a4.409 4.409 0 011.834 2.182q.614 1.468.614 3.686a13.352 13.352 0 01-.104 1.727q-.265 2.031-1.21 3.169a5.651 5.651 0 01-2.309 1.644 7.896 7.896 0 01-1.417.408l6.048 8.712-1.872 1.26-6.84-9.72zM16.272.972l-.576 1.908q-3.24-.648-4.806-.648a25.64 25.64 0 00-1.111.023q-.873.038-1.571.139a7.101 7.101 0 00-1.452.378 8.916 8.916 0 00-.834.36q-1.17.576-1.854 1.62a7.789 7.789 0 00-.881 1.932q-.6 1.915-.66 4.709a29.43 29.43 0 00-.007.631 26.139 26.139 0 00.127 2.68q.276 2.664 1.151 4.227a4.852 4.852 0 00.882 1.157 7.119 7.119 0 00.995.781 5.29 5.29 0 001.165.569 7.128 7.128 0 001.566.334 8.843 8.843 0 00.9.044q1.07 0 1.699-.045a7.782 7.782 0 00.299-.027 8.751 8.751 0 002.951-.75 11.027 11.027 0 001.189-.618l.828 1.944q-2.268 1.544-5.749 1.737a18.42 18.42 0 01-1.019.027 22.44 22.44 0 01-1.245-.032q-.858-.048-1.563-.166a7.164 7.164 0 01-1.263-.338q-.612-.222-1.257-.562-1.332-.702-2.178-1.962a7.53 7.53 0 01-.585-1.061q-.258-.564-.484-1.249a18.102 18.102 0 01-.353-1.218 17.338 17.338 0 01-.394-2.139Q0 13.882 0 12.15q0-2.749.574-4.851a12.628 12.628 0 01.146-.495 14.863 14.863 0 01.536-1.44q.549-1.261 1.246-2.088 1.062-1.26 2.574-2.034a12.735 12.735 0 011.28-.573Q7.005.423 7.608.29a7.304 7.304 0 01.276-.056 12.395 12.395 0 01.98-.133q.511-.05 1.103-.075A29.84 29.84 0 0111.232 0a11.131 11.131 0 011.633.131q.841.126 1.797.371a26.407 26.407 0 011.61.47zm209.304 1.476h-9.036V10.8h8.064v2.016h-8.1V23.76h-2.376V.432h11.7l-.252 2.016zM18.936 23.76L26.82.432h3.24l7.884 23.328h-2.556l-2.412-7.236h-9.072l-2.412 7.236h-2.556zm226.224 0L253.044.432h3.24l7.884 23.328h-2.556l-2.412-7.236h-9.072l-2.412 7.236h-2.556zM66.456 2.448H59.94V.432h15.444v2.016h-6.552V23.76h-2.376V2.448zm85.68 0h-6.516V.432h15.444v2.016h-6.552V23.76h-2.376V2.448zm78.3 21.312v-.036h-.036V.432h2.376l-.036 21.312h10.368v2.016h-12.672zM48.672 14.652l-2.16-.036h-1.656v9.144h-2.412V.432h6.84a25.981 25.981 0 011.348.033q.654.034 1.218.104a12.277 12.277 0 01.656.097q1.314.234 2.538.918a4.409 4.409 0 011.834 2.182q.614 1.468.614 3.686a12.354 12.354 0 01-.147 1.979q-.363 2.229-1.617 3.457-.756.72-2.016 1.134-1.26.414-2.34.522-1.08.108-2.7.108zm-3.816-2.088h2.376l2.736.036a14.552 14.552 0 001.303-.054q1.866-.168 2.657-.864.812-.713.992-2.786a15.032 15.032 0 00.052-1.3q0-3.168-1.314-4.068a3.686 3.686 0 00-.911-.435q-.983-.33-2.533-.426a22.152 22.152 0 00-1.362-.039h-3.996v9.936zm59.112 0h2.376l2.736.036a14.552 14.552 0 001.303-.054q1.866-.168 2.657-.864.812-.713.992-2.786a15.032 15.032 0 00.052-1.3q0-3.168-1.314-4.068a3.686 3.686 0 00-.911-.435q-.983-.33-2.533-.426a22.152 22.152 0 00-1.362-.039h-3.996v9.936zM28.44 2.412l-3.888 12.096h7.812L28.548 2.412h-.108zm226.224 0l-3.888 12.096h7.812l-3.816-12.096h-.108z"
        stroke="#fff"
        fill="#fff"
      />
    </svg>
  );
};
