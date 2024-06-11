// JavaScript Document

// ページの読み込みを待つ
      window.addEventListener('load', init);

      function init() {
        // サイズを指定
        let width = window.innerWidth;
        let height = window.innerHeight;
		
		
        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#myCanvas'),
          antialias: true,
          devicePixelRatio: window.devicePixelRatio,
			alpha: true,
        });
        renderer.setSize(width, height);
		renderer.setClearColor( 0xffffff, 0);

        // シーンを作成
        const scene = new THREE.Scene();
		/*scene.background = new THREE.Color( 0x011a3f );*/

        // フォグを設定
        /*scene.fog = new THREE.Fog(0x000000, 100, 2000);*/

        // カメラを作成
        const camera = new THREE.PerspectiveCamera(45, width / height);
        camera.position.set(0, 0, +1);

        // グループを作成
        const group = new THREE.Group();
        scene.add(group);
		
        const geometry = new THREE.SphereGeometry(1, 12, 12);
        const material = new THREE.MeshPhongMaterial({color: 0xdddddd, transparent: true});

        for (let i = 0; i < 250; i++) {
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.x = (Math.random() - 0.5) * 2000;
          mesh.position.y = (Math.random() - 0.5) * 2000;
          mesh.position.z = (Math.random() - 0.5) * 2800;
          mesh.rotation.x = Math.random() * 2 * Math.PI;
          mesh.rotation.y = Math.random() * 2 * Math.PI;
          mesh.rotation.z = Math.random() * 2 * Math.PI;
          // グループに格納する
          group.add(mesh);
        }
		
		
        // 光源
        /*scene.add(new THREE.DirectionalLight(0x00ffff, 4)); // 平行光源*/
        scene.add(new THREE.AmbientLight(0xbcffff, 1.0)); // 環境光源
		
		
		// マウス位置
		let rot = 0; // 角度
		let mouseX = 0; // マウス座標
		let rotY = 0;
		let mouseY = 0;
		document.addEventListener("mousemove", (event) => {
		mouseX = event.pageX;
		});
		document.addEventListener("mousemove", (event) => {
		mouseY = event.pageY;
		});
		
		
		
        // 毎フレーム時に実行されるループイベントです
        tick();

        function tick() {
			// マウスの位置に応じて角度を設定// マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
			const targetRot = (mouseX / window.innerWidth) * 18;
			const targetRotY = (mouseY / window.innerWidth) * 18;
			rot += (targetRot - rot) * 0.2;
			rotY += (targetRotY - rotY) * 0.2;
			// ラジアンに変換する
			const radian = rot * Math.PI / 180;
			const radianY = rotY * Math.PI / 180;
			// 角度に応じてカメラの位置を設定
			camera.position.x = Math.sin(radian);
			camera.position.y = Math.tan(radianY * -1);
			camera.position.z = Math.cos(radian);
			camera.lookAt(new THREE.Vector3(0, 0, 0));// 原点方向を見つめる
			
          // グループを回す
          group.rotateY(-0.0007);
			group.rotateX(0.0007);
          renderer.render(scene, camera); // レンダリング
          requestAnimationFrame(tick);
        } 
		
		onResize();
		window.addEventListener('resize', onResize);
		function onResize() {
			// サイズを取得
			let width = window.innerWidth;
			let height = window.innerHeight;
			
			// レンダラーのサイズを調整する
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(width, height);
			
			// カメラのアスペクト比を正す
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}
		
      }

