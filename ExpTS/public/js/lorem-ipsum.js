function generateParagraph() {
  const numberParagraph = parseInt(
    document.getElementById('input-paragraph').value,
  );

  const paragraphContainer = document.getElementById('container-paragraph');
  paragraphContainer.innerHTML = '';

  const PARAGRAPHS = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar commodo porttitor. Vivamus eget porttitor libero. Maecenas pulvinar scelerisque aliquet. Nam vitae eleifend lacus. Nullam quis eros interdum, varius sem vitae, aliquet felis. Ut ante urna, ullamcorper sed tempus et, tincidunt vitae diam. Integer et fermentum nisl. Integer accumsan eget magna non blandit. Nam elementum velit et tellus dictum accumsan. Phasellus placerat tempor hendrerit.',
    'Quisque accumsan ligula eu elit ornare varius. Aliquam convallis odio fringilla leo tristique, eget tristique dui finibus. Etiam hendrerit, urna ac eleifend vehicula, dolor velit fermentum dui, a dictum orci lacus vitae dui. Integer in vulputate quam. Sed vitae aliquam mi. Mauris lectus mauris, pulvinar eu augue vitae, tincidunt lobortis ante. Integer pharetra erat nec magna ullamcorper euismod. Ut ut tellus consectetur, euismod magna et, finibus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rhoncus iaculis metus at porta. Quisque vitae arcu justo. Vivamus pulvinar mattis ipsum ut maximus. In interdum sapien sit amet bibendum vestibulum. Curabitur convallis quam nec tristique laoreet.',
    'Proin eu molestie massa, quis pulvinar neque. Suspendisse posuere et ipsum et consequat. Proin vel nisi sed elit sollicitudin cursus. Sed tempor nulla sed leo vestibulum semper. Ut nec tortor ut lacus ultricies pulvinar. Duis justo est, sodales non posuere ut, ultrices et urna. Praesent at porttitor justo, in aliquam sapien. Etiam vehicula dui nec augue pretium, sit amet rutrum metus facilisis.',
    'Ut venenatis risus eget nisi elementum sagittis. Pellentesque gravida auctor efficitur. Nullam vitae sem vitae lectus tempor tempus. In interdum, mauris sit amet gravida vulputate, est dui luctus orci, a porttitor risus augue nec ligula. Fusce augue magna, malesuada nec maximus sit amet, molestie nec orci. Nunc consequat sed justo non convallis. Vivamus placerat eros quis tellus lacinia, ut consectetur odio gravida. Donec ac elementum lacus, sed lobortis metus. Maecenas luctus tristique dapibus. Fusce ac quam consequat, rhoncus magna nec, aliquam dolor. Aliquam quis odio a arcu porta tincidunt.',
    'In ut tellus et quam cursus maximus et at neque. Donec commodo feugiat porta. Phasellus accumsan imperdiet laoreet. Mauris risus nisi, dignissim sed massa vel, posuere sollicitudin sem. Cras rutrum sapien mauris, id gravida quam gravida nec. Ut metus sem, bibendum non felis eu, pharetra dapibus odio. Nulla elit purus, sollicitudin id sodales vel, congue tincidunt libero. Proin bibendum ligula nisl, ac malesuada sem mattis vel. Aliquam varius orci sit amet massa auctor, nec ullamcorper erat dictum. Vivamus dapibus leo ac porttitor consequat.',
    'Vestibulum posuere, urna non pretium efficitur, dolor metus convallis felis, vitae cursus neque sem et sem. Proin maximus, risus a auctor interdum, ipsum est maximus orci, quis mattis elit orci ac magna. Nulla in eleifend arcu, ut hendrerit urna. Sed sollicitudin feugiat nulla, euismod suscipit magna tempor sit amet. Morbi et nisl eget dolor rutrum vestibulum. Nullam et ullamcorper lorem. Nullam tristique ultrices lorem, sed imperdiet justo luctus quis. Vestibulum metus neque, pellentesque eget lacus vitae, hendrerit imperdiet turpis. Nulla condimentum malesuada arcu, eu venenatis nunc pretium eu. In hac habitasse platea dictumst. Vestibulum non nibh mauris. Vestibulum fringilla luctus ante, ut maximus sapien fermentum id. Nulla egestas suscipit massa id tempus. Fusce vitae enim vitae sem bibendum consequat eu in ante. Curabitur pulvinar augue id neque dictum fringilla. Morbi vitae eros luctus, ultrices tellus nec, dictum libero.',
    'Ut euismod aliquam est sed condimentum. Sed vel odio tempus, lacinia leo vitae, consectetur eros. Morbi id ipsum augue. Ut ac posuere risus, sit amet accumsan tortor. Praesent sodales mattis mauris a porttitor. Morbi tincidunt libero in dolor sollicitudin, ut finibus tellus tristique. Integer suscipit vel est eget pulvinar. Nam pharetra ante eget lorem feugiat sodales. Quisque aliquam nisl et lorem pretium, sit amet ultrices eros egestas. Donec ac leo sit amet nunc pulvinar consectetur ut non leo.',
    'Sed eleifend in ipsum ornare tincidunt. Cras faucibus interdum aliquet. Sed ac nulla ligula. Nam dapibus tristique cursus. Nunc ultricies ligula eu porta consectetur. Vestibulum augue libero, rutrum in faucibus sit amet, luctus non mi. Pellentesque rhoncus interdum nulla, non vulputate tortor ultricies eget. Aliquam erat volutpat.',
    'Proin tristique mattis est. Nulla at tristique sapien, quis pellentesque lacus. Quisque lacus nisi, iaculis non ullamcorper sit amet, bibendum at augue. Maecenas maximus non nulla id ullamcorper. Nam at dapibus dui. Praesent sit amet porta libero. Ut luctus metus dui, quis laoreet dolor elementum in. Quisque accumsan orci purus, nec placerat odio mollis a. Fusce in risus et dui accumsan volutpat at vel urna. Integer ullamcorper, arcu vitae tincidunt porta, eros ipsum gravida lorem, id vulputate orci purus at purus. Sed sed enim lacus. Quisque aliquet eu augue et iaculis. Fusce vitae tellus pharetra, venenatis libero sed, lobortis est. Donec ligula justo, efficitur a magna venenatis, iaculis eleifend lacus. Duis eget dictum diam.',
    'Sed a risus vel neque bibendum consequat feugiat vitae dolor. Morbi ultrices lectus in tellus ultrices, id tincidunt arcu tincidunt. Aenean tincidunt eros eu massa accumsan cursus. Pellentesque vestibulum egestas rhoncus. Proin malesuada enim ut quam tincidunt, sed scelerisque ante ultricies. Maecenas a massa dapibus, tincidunt felis vitae, suscipit est. Donec id lacinia leo. In eu maximus arcu. Sed consequat nunc non est porta semper. Quisque id arcu quam. Nunc dignissim lacus neque. Cras risus velit, finibus ut fringilla vel, maximus sed mi. Nunc tincidunt leo et viverra finibus. Cras efficitur egestas metus, id pretium ante ullamcorper at. Vestibulum sed blandit dui. Praesent efficitur id purus sagittis iaculis.',
  ];

  if (numberParagraph <= 0 || numberParagraph > 120) {
    alert('O número de parágrafos deve ser maior que 0 e até 120.');
    document.getElementById('input-paragraph').value = 0;
  } else {
    for (let i = 0; i < numberParagraph; i++) {
      // Gerando um número aleatório e arredondando para baixo e obter um índice aleatório de PARAGRAPHS
      let randomParagraph = Math.floor(Math.random() * PARAGRAPHS.length);

      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = PARAGRAPHS[randomParagraph];
      paragraphContainer.appendChild(paragraphElement);
    }
  }
}

/* 
    Removendo a ação padrão do navegador (evitando o envio do value do input para url) e
    chamando a função acima, quando o usuário fizer o envio pelo teclado.
*/
document
  .querySelector('#form-paragraph')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    generateParagraph();
  });
