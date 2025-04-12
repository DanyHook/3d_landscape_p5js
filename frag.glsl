#version 300 es
/*********
* made by Matthias Hurrle (@atzedent)
*/
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define R resolution
#define T (10.+S(.0,20.,floor(20.*fract(.005*TT))))
#define TT time
#define S smoothstep
#define N normalize
#define gyr(a) dot(sin(a),cos((a).yzx))
float rnd(vec3 p) { p=fract(p*vec3(12.9898,78.233,156.345)); p+=dot(p,p+34.56); return fract(p.x*p.y*p.z); }
float fbm(vec3 p) {
	p.x-=2.4;
	float t=.0, a=1.;
	for (int i=0; i<7; i++) {
		p.xz+=vec2(T*12.1/a,t*.5);
		a*=.5;
		t+=gyr(p/(a+1e-5))*a;
	}
	return t;
}
float map(vec3 p) {
	return p.y+.8-S(.0,1.75,cos(1.518*fbm(.1+p*.2)));
}
void main(void) {
	vec2 uv=(FC-.5*R)/min(R.x,R.y);
	uv.y*=tanh(sin(2.*.3141592*TT-2.+rnd(floor(uv.yyy*9.))*.5)*3.+3.);
	vec3 col=vec3(0),
	p=vec3(0,0,mod(TT,10.)),
	rd=N(vec3(uv,1));
	for (float i=.0; i<80.; i++) {
		float d=map(p)*mix(.8,1.,rnd(p));
		if (d<1e-2 || d>1.5) {
			col+=(80.-i)/80.;
			break;
		}
		p+=rd*d;
	}
	col=max(col,.08);
	O=vec4(col,1);
}